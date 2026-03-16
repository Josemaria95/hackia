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
import { colors, theme } from "../../lib/theme";
import PetDisplay from "../../components/PetDisplay";
import ScenarioCard from "../../components/ScenarioCard";
import EmotionPicker from "../../components/EmotionPicker";

type Step = "loading" | "done_today" | "scenario" | "emotion" | "reaction" | "breathe" | "sticker";

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

  const breathScale = useRef(new Animated.Value(1)).current;
  const stickerScale = useRef(new Animated.Value(0)).current;

  const todayKey = () => {
    const d = new Date();
    return `checkin-${child?.id}-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  };

  useEffect(() => {
    loadChild();
  }, []);

  async function loadChild() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.replace("/(auth)/login");
      return;
    }

    const { data: children } = await supabase
      .from("children")
      .select("id, name, mascot_type, mascot_name")
      .eq("parent_id", user.id)
      .limit(1);

    if (!children || children.length === 0) {
      router.replace("/(app)/select-mascot");
      return;
    }

    const c = children[0];
    setChild(c);

    const done = await AsyncStorage.getItem(
      `checkin-${c.id}-${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
    );
    if (done) {
      setStep("done_today");
    } else {
      setScenario(getScenarioForToday(c.id));
      setStep("scenario");
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

      const r = getPetReaction(scenario.dimension, choiceValue, child.mascot_name);
      setReaction(r);
      setPetMood(r.mood);

      await supabase.from("checkins").insert({
        child_id: child.id,
        situation: scenario.id,
        situation_choice: choiceValue,
        emotion: emo,
      });

      setStep("reaction");
    },
    [child, scenario, choiceValue]
  );

  const startBreathe = useCallback(() => {
    setStep("breathe");
    const cycles = Array.from({ length: 4 }).flatMap(() => [
      Animated.timing(breathScale, {
        toValue: 1.5,
        duration: 3500,
        useNativeDriver: true,
      }),
      Animated.timing(breathScale, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
      }),
    ]);
    Animated.sequence(cycles).start(() => showSticker());
  }, [breathScale]);

  const showSticker = useCallback(async () => {
    setStep("sticker");
    Animated.spring(stickerScale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    if (child) {
      await AsyncStorage.setItem(todayKey(), "done");
    }
  }, [stickerScale, child]);

  const skipToSticker = useCallback(() => {
    showSticker();
  }, [showSticker]);

  if (step === "loading") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  if (step === "done_today") {
    return (
      <View style={styles.center}>
        {child && (
          <PetDisplay mood="happy" name={child.mascot_name} />
        )}
        <Text style={styles.doneText}>
          ¡Ya jugaste con {child?.mascot_name} hoy!
        </Text>
        <Text style={styles.doneSubtext}>Vuelve mañana</Text>
        <Pressable
          style={styles.primaryBtn}
          onPress={() => router.push("/(app)/summary")}
        >
          <Text style={styles.primaryBtnText}>Ver resumen semanal</Text>
        </Pressable>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
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
        />
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
          onPress={() => router.push("/(app)/summary")}
        >
          <Text style={styles.primaryBtnText}>Ver resumen semanal</Text>
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
    fontWeight: "700",
    color: theme.dark,
    marginTop: 24,
    textAlign: "center",
  },
  doneSubtext: {
    fontSize: 16,
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
  primaryBtnText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
  logoutBtn: { marginTop: 16 },
  logoutText: { color: theme.textLight, fontSize: 14 },
  reactionText: {
    fontSize: 18,
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
  breatheText: { color: "#FFF", fontSize: 17, fontWeight: "600" },
  skipBtn: {
    paddingVertical: 12,
    alignItems: "center",
  },
  skipText: { color: theme.textLight, fontSize: 15 },
  breatheTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: theme.dark,
    marginBottom: 40,
  },
  breatheCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.mint[300],
    opacity: 0.6,
  },
  breatheHint: {
    fontSize: 18,
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
    fontWeight: "700",
    color: theme.dark,
    marginBottom: 16,
  },
});
