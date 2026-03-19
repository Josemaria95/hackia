import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";
import { getScenarioForToday, type Scenario } from "../../lib/scenarios";
import {
  getPetReaction,
  type PetMood,
  type PetReaction,
} from "../../lib/pet-reactions";
import { colors, fonts, theme } from "../../lib/theme";
import PetDisplay from "../../components/PetDisplay";
import ScenarioCard from "../../components/ScenarioCard";
import EmotionPicker from "../../components/EmotionPicker";
import { scheduleMondaySummaryNotification } from "../../lib/notifications";
import type { MicroActivity } from "../types/database";

type Step = "loading" | "done_today" | "scenario" | "emotion" | "reaction" | "breathe" | "sticker" | "error";

interface ChildData {
  id: string;
  name: string;
  mascot_type: string;
  mascot_name: string;
}

export default function CheckInScreen() {
  const [step, setStep] = useState<Step>("loading");
  const [child, setChild] = useState<ChildData | null>(null);
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [choiceValue, setChoiceValue] = useState<string>("");
  const [emotion, setEmotion] = useState<string>("");
  const [reaction, setReaction] = useState<PetReaction | null>(null);
  const [petMood, setPetMood] = useState<PetMood>("happy");
  const [breathCycle, setBreathCycle] = useState(1);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [microActivity, setMicroActivity] = useState<MicroActivity | null>(null);
  const sessionStartRef = useRef<number>(Date.now());

  const breathScale = useRef(new Animated.Value(1)).current;
  const stickerScale = useRef(new Animated.Value(0)).current;

  const todayKey = () => {
    if (!child) return "";
    const d = new Date();
    return `checkin-${child.id}-${d.toISOString().slice(0, 10)}`;
  };

  useEffect(() => {
    loadChild();
  }, []);

  async function loadChild() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/(auth)/login");
        return;
      }

      const { data: children, error } = await supabase
        .from("children")
        .select("id, name, mascot_type, mascot_name")
        .eq("parent_id", user.id)
        .limit(1);

      if (error) throw error;

      if (!children || children.length === 0) {
        router.replace("/(app)/select-mascot");
        return;
      }

      const c = children[0];
      setChild(c);

      scheduleMondaySummaryNotification(c.mascot_name).catch((err) => {
        console.warn("Failed to schedule notification:", err);
      });

      const done = await AsyncStorage.getItem(
        `checkin-${c.id}-${new Date().toISOString().slice(0, 10)}`
      );
      if (done) {
        setStep("done_today");
      } else {
        sessionStartRef.current = Date.now();
        setScenario(getScenarioForToday(c.id));
        setStep("scenario");
      }
    } catch (err) {
      console.warn("loadChild error:", err);
      setErrorMsg("No pudimos cargar los datos. Revisa tu conexión.");
      setStep("error");
    }
  }

  const handleChoice = useCallback((value: string) => {
    setChoiceValue(value);
    setStep("emotion");
  }, []);

  const handleEmotion = useCallback(
    async (emo: string) => {
      if (!child || !scenario) return;
      setEmotion(emo);

      const r = getPetReaction(scenario.dimension, choiceValue, child.mascot_name, emo);
      setReaction(r);
      setPetMood(r.mood);

      try {
        const { error } = await supabase.rpc("upsert_checkin", {
          p_child_id:         child.id,
          p_situation:        scenario.id,
          p_situation_choice: choiceValue,
          p_emotion:          emo,
          p_dimension:        scenario.dimension,
          p_micro_activity:   null,   // updated in showSticker once activity is known
          p_session_duration: null,
        });
        if (error) throw error;
      } catch (err) {
        console.warn("checkin upsert error:", err);
      }

      setStep("reaction");
    },
    [child, scenario, choiceValue]
  );

  const startBreathe = useCallback(() => {
    setMicroActivity("breathe");
    setStep("breathe");
    setBreathCycle(1);
    const totalCycles = 4;
    const cycles = Array.from({ length: totalCycles }).flatMap((_, i) => [
      Animated.timing(breathScale, {
        toValue: 1.5,
        duration: 3500,
        useNativeDriver: true,
      }),
      {
        start: (cb?: (result: { finished: boolean }) => void) => {
          setBreathCycle(i + 1);
          Animated.timing(breathScale, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: true,
          }).start(cb);
        },
        stop: () => {},
        reset: () => {},
      } as Animated.CompositeAnimation,
    ]);
    Animated.sequence(cycles).start(() => showSticker("breathe"));
  }, [breathScale]);

  const showSticker = useCallback(async (activity?: MicroActivity) => {
    setStep("sticker");
    Animated.spring(stickerScale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    if (child && scenario) {
      const sessionDuration = Date.now() - sessionStartRef.current;
      const resolvedActivity = activity ?? microActivity ?? null;

      // Update the checkin with final micro_activity + session_duration_ms.
      // ON CONFLICT DO UPDATE in upsert_checkin keeps existing values for null params.
      try {
        await supabase.rpc("upsert_checkin", {
          p_child_id:         child.id,
          p_situation:        scenario.id,
          p_situation_choice: choiceValue,
          p_emotion:          emotion,
          p_dimension:        scenario.dimension,
          p_micro_activity:   resolvedActivity,
          p_session_duration: sessionDuration,
        });
      } catch (err) {
        console.warn("checkin finalize error:", err);
      }

      // AsyncStorage remains as local UI cache (prevents re-showing scenario today)
      await AsyncStorage.setItem(todayKey(), "done");
    }
  }, [stickerScale, child, scenario, choiceValue, emotion, microActivity]);

  const skipToSticker = useCallback(() => {
    showSticker(undefined);
  }, [showSticker]);

  if (step === "loading") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  if (step === "error") {
    return (
      <View style={styles.center}>
        <Text style={styles.doneText}>{errorMsg}</Text>
        <Pressable
          style={[styles.primaryBtn, { marginTop: 24 }]}
          onPress={() => {
            setStep("loading");
            setErrorMsg("");
            loadChild();
          }}
        >
          <Text style={styles.primaryBtnText}>Reintentar</Text>
        </Pressable>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </Pressable>
      </View>
    );
  }

  if (step === "done_today") {
    return (
      <View style={styles.center}>
        {child && (
          <PetDisplay mood="happy" name={child.mascot_name} size={220} />
        )}
        <Text style={styles.doneText}>
          {"\u00A1"}{child?.mascot_name}{" te espera ma\u00F1ana!"}
        </Text>
        <Text style={styles.doneSubtext}>Hoy ya jugaron juntos</Text>
        <Pressable
          style={styles.secondaryBtn}
          onPress={() => router.push("/(app)/summary")}
        >
          <Text style={styles.secondaryBtnText}>Resumen semanal (padres)</Text>
        </Pressable>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>{"Cerrar sesi\u00F3n"}</Text>
        </Pressable>
      </View>
    );
  }

  if (step === "scenario" && scenario && child) {
    return (
      <View style={styles.container}>
        <PetDisplay mood="happy" name={child.mascot_name} size={160} />
        <View style={{ height: 24 }} />
        <ScenarioCard
          scenario={scenario}
          petName={child.mascot_name}
          onChoose={handleChoice}
        />
      </View>
    );
  }

  if (step === "emotion" && child) {
    return (
      <View style={styles.container}>
        <PetDisplay mood="neutral" name={child.mascot_name} size={140} />
        <EmotionPicker
          onSelect={handleEmotion}
          selected={emotion}
          petName={child.mascot_name}
        />
      </View>
    );
  }

  if (step === "reaction" && child && reaction) {
    return (
      <View style={styles.container}>
        <PetDisplay mood={petMood} name={child.mascot_name} />
        <Text style={styles.reactionText}>{reaction.message}</Text>
        <View style={styles.reactionButtons}>
          <Pressable style={styles.breatheBtn} onPress={startBreathe}>
            <Text style={styles.breatheText}>
              Respirar con {child.mascot_name}
            </Text>
          </Pressable>
          <Pressable style={styles.skipBtn} onPress={skipToSticker}>
            <Text style={styles.skipText}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  if (step === "breathe" && child) {
    return (
      <View style={styles.center}>
        <Text style={styles.breatheTitle}>
          Respira con {child.mascot_name}
        </Text>
        <Animated.View
          style={[
            styles.breatheCircle,
            { transform: [{ scale: breathScale }] },
          ]}
        >
          <Text style={styles.breatheCounterInside}>{breathCycle}</Text>
        </Animated.View>
        <Text style={styles.breatheHint}>Inhala... Exhala...</Text>
      </View>
    );
  }

  if (step === "sticker" && child) {
    return (
      <View style={styles.center}>
        <Animated.View style={[styles.stickerContainer, { transform: [{ scale: stickerScale }] }]}>
          <View style={styles.starBg}>
            <Text style={styles.starIcon}>★</Text>
          </View>
        </Animated.View>
        <Text style={styles.stickerText}>¡Ganaste tu estrella!</Text>
        <PetDisplay mood="happy" name={child.mascot_name} size={120} />
        <Pressable
          style={[styles.primaryBtn, { marginTop: 24 }]}
          onPress={() => setStep("done_today")}
        >
          <Text style={styles.primaryBtnText}>Volver con {child.mascot_name}</Text>
        </Pressable>
      </View>
    );
  }

  return null;
}

async function handleLogout() {
  await supabase.auth.signOut();
  router.replace("/(auth)/login");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    backgroundColor: theme.bg,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  doneText: {
    fontSize: 22,
    fontFamily: fonts.displayBold,
    color: theme.dark,
    marginTop: 24,
    textAlign: "center",
  },
  doneSubtext: {
    fontSize: 16,
    fontFamily: fonts.display,
    color: theme.textSecondary,
    marginTop: 8,
    marginBottom: 24,
  },
  primaryBtn: {
    backgroundColor: theme.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  primaryBtnText: { color: "#FFF", fontSize: 16, fontFamily: fonts.displaySemiBold },
  secondaryBtn: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: theme.border,
  },
  secondaryBtnText: { color: theme.textSecondary, fontSize: 14, fontFamily: fonts.body },
  logoutBtn: { marginTop: 16 },
  logoutText: { color: theme.textLight, fontSize: 14 },
  reactionText: {
    fontSize: 18,
    fontFamily: fonts.display,
    color: theme.dark,
    textAlign: "center",
    marginTop: 24,
    marginHorizontal: 24,
    lineHeight: 26,
  },
  reactionButtons: {
    marginTop: 32,
    paddingHorizontal: 24,
    gap: 12,
  },
  breatheBtn: {
    backgroundColor: colors.mint[500],
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  breatheText: { color: "#FFF", fontSize: 17, fontFamily: fonts.displaySemiBold },
  skipBtn: {
    paddingVertical: 12,
    alignItems: "center",
  },
  skipText: { color: theme.textLight, fontSize: 15 },
  breatheTitle: {
    fontSize: 22,
    fontFamily: fonts.displaySemiBold,
    color: theme.dark,
    marginBottom: 40,
  },
  breatheCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: colors.mint[300],
    alignItems: "center",
    justifyContent: "center",
  },
  breatheCounterInside: {
    fontSize: 72,
    fontFamily: fonts.displayBold,
    color: "#FFF",
  },
  breatheHint: {
    fontSize: 18,
    fontFamily: fonts.display,
    color: theme.textSecondary,
    marginTop: 32,
  },
  stickerContainer: { marginBottom: 16 },
  starBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.orange[50],
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.orange[300],
  },
  starIcon: {
    fontSize: 40,
    color: colors.orange[500],
  },
  stickerText: {
    fontSize: 22,
    fontFamily: fonts.displayBold,
    color: theme.dark,
    marginBottom: 16,
  },
});
