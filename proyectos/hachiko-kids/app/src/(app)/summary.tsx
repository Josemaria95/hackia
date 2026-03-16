import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";
import { getDimensionLabel, type Dimension } from "../../lib/scenarios";
import { colors, theme } from "../../lib/theme";
import SummaryCard from "../../components/SummaryCard";

interface ChildData {
  id: string;
  name: string;
  mascot_type: string;
  mascot_name: string;
}

interface CheckIn {
  situation: string;
  situation_choice: string;
  emotion: string;
  created_at: string;
}

const DIMENSION_ICONS: Record<Dimension, string> = {
  instrucciones: "📋",
  socializacion: "👫",
  prosocial: "🤝",
  regulacion: "🧘",
  animo: "💛",
};

const DIMENSION_COLORS: Record<Dimension, string> = {
  instrucciones: colors.purple[500],
  socializacion: colors.mint[500],
  prosocial: colors.mint[700],
  regulacion: colors.purple[300],
  animo: colors.orange[500],
};

const EMOTION_EMOJIS: Record<string, string> = {
  sad: "😢",
  angry: "😠",
  neutral: "😐",
  happy: "😊",
  very_happy: "😄",
};

const DAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function getWeekRange(offset: number): { start: Date; end: Date; label: string } {
  const now = new Date();
  const dayOfWeek = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + 1 + offset * 7);
  monday.setHours(0, 0, 0, 0);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  const label = `${monday.getDate()}/${monday.getMonth() + 1} - ${sunday.getDate()}/${sunday.getMonth() + 1}`;
  return { start: monday, end: sunday, label };
}

function getDimensionFromSituation(situationId: string): Dimension {
  const prefix = situationId.split("-")[0];
  const map: Record<string, Dimension> = {
    inst: "instrucciones",
    soc: "socializacion",
    pro: "prosocial",
    reg: "regulacion",
    ani: "animo",
  };
  return map[prefix] ?? "animo";
}

function summarizeDimension(
  dimension: Dimension,
  checkins: CheckIn[],
): string {
  const relevant = checkins.filter(
    (c) => getDimensionFromSituation(c.situation) === dimension
  );
  if (relevant.length === 0) return "Sin datos esta semana";

  const total = relevant.length;

  switch (dimension) {
    case "instrucciones": {
      const helped = relevant.filter((c) => c.situation_choice === "helps").length;
      return `Ayudó ${helped}/${total} veces esta semana`;
    }
    case "socializacion": {
      const alone = relevant.filter((c) => c.situation_choice === "alone").length;
      const social = relevant.filter((c) => c.situation_choice === "social").length;
      if (alone > social) return `Prefirió jugar sola ${alone}/${total} días`;
      return `Eligió jugar con amigos ${social}/${total} días`;
    }
    case "prosocial": {
      const shared = relevant.filter(
        (c) => c.situation_choice === "shares" || c.situation_choice === "compromises"
      ).length;
      return `Compartió o colaboró ${shared}/${total} veces`;
    }
    case "regulacion": {
      const regulated = relevant.filter(
        (c) => c.situation_choice === "regulates"
      ).length;
      return `Eligió regularse ${regulated}/${total} veces`;
    }
    case "animo": {
      const emotions = relevant.map((c) => {
        const d = new Date(c.created_at);
        const dayIdx = (d.getDay() || 7) - 1;
        return `${DAY_LABELS[dayIdx]}${EMOTION_EMOJIS[c.emotion] ?? "😐"}`;
      });
      return emotions.join(" ");
    }
  }
}

function generateTip(checkins: CheckIn[]): string {
  if (checkins.length === 0) return "¡Completa check-ins esta semana para recibir tips!";

  const mondayCheckins = checkins.filter(
    (c) => new Date(c.created_at).getDay() === 1
  );
  const mondaySad = mondayCheckins.filter(
    (c) => c.emotion === "sad" || c.emotion === "angry"
  );
  if (mondaySad.length > 0) {
    return "Los lunes parecen más difíciles. Intenta un ritual de despedida especial antes del colegio.";
  }

  const regCheckins = checkins.filter(
    (c) => getDimensionFromSituation(c.situation) === "regulacion"
  );
  const explodes = regCheckins.filter(
    (c) => c.situation_choice === "explodes"
  );
  if (explodes.length >= 2) {
    return "Las emociones fuertes aparecen seguido. Practicar respiración juntos antes de dormir puede ayudar.";
  }

  const socCheckins = checkins.filter(
    (c) => getDimensionFromSituation(c.situation) === "socializacion"
  );
  const alone = socCheckins.filter((c) => c.situation_choice === "alone");
  if (alone.length >= 3) {
    return "Prefiere jugar solo/a bastante. Está bien, pero invitar un amigo a casa puede ayudar a abrir el espacio social.";
  }

  return "¡Buena semana! Sigan con la rutina diaria — la consistencia es clave.";
}

export default function WeeklySummaryScreen() {
  const [child, setChild] = useState<ChildData | null>(null);
  const [checkins, setCheckins] = useState<CheckIn[]>([]);
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [weekOffset]);

  async function loadData() {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data: children } = await supabase
      .from("children")
      .select("id, name, mascot_type, mascot_name")
      .eq("parent_id", user.id)
      .limit(1);

    if (!children || children.length === 0) return;

    const c = children[0];
    setChild(c);

    const { start, end } = getWeekRange(weekOffset);

    const { data: weekCheckins } = await supabase
      .from("checkins")
      .select("situation, situation_choice, emotion, created_at")
      .eq("child_id", c.id)
      .gte("created_at", start.toISOString())
      .lte("created_at", end.toISOString())
      .order("created_at");

    setCheckins(weekCheckins ?? []);
    setLoading(false);
  }

  const week = getWeekRange(weekOffset);
  const dimensions: Dimension[] = [
    "instrucciones",
    "socializacion",
    "prosocial",
    "regulacion",
    "animo",
  ];
  const activeDays = new Set(
    checkins.map((c) => new Date(c.created_at).toDateString())
  ).size;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Volver</Text>
      </Pressable>

      <Text style={styles.title}>Resumen semanal</Text>
      {child && (
        <Text style={styles.childName}>{child.name}</Text>
      )}

      <View style={styles.weekNav}>
        <Pressable onPress={() => setWeekOffset((w) => w - 1)}>
          <Text style={styles.navArrow}>◀</Text>
        </Pressable>
        <Text style={styles.weekLabel}>{week.label}</Text>
        <Pressable
          onPress={() => setWeekOffset((w) => Math.min(w + 1, 0))}
          disabled={weekOffset >= 0}
        >
          <Text
            style={[styles.navArrow, weekOffset >= 0 && { opacity: 0.3 }]}
          >
            ▶
          </Text>
        </Pressable>
      </View>

      <Text style={styles.activeDays}>
        Días activos: {activeDays}/7
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={theme.primary}
          style={{ marginTop: 40 }}
        />
      ) : (
        <>
          {dimensions.map((dim) => (
            <SummaryCard
              key={dim}
              title={getDimensionLabel(dim)}
              icon={DIMENSION_ICONS[dim]}
              description={summarizeDimension(dim, checkins)}
              color={DIMENSION_COLORS[dim]}
            />
          ))}

          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>💡 Tip de la semana</Text>
            <Text style={styles.tipText}>{generateTip(checkins)}</Text>
          </View>
        </>
      )}

      <Pressable
        style={styles.logoutBtn}
        onPress={async () => {
          await supabase.auth.signOut();
          router.replace("/(auth)/login");
        }}
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },
  content: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 40 },
  backBtn: { marginBottom: 16 },
  backText: { color: theme.primary, fontSize: 16, fontWeight: "500" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.dark,
  },
  childName: {
    fontSize: 16,
    color: theme.textSecondary,
    marginTop: 4,
    marginBottom: 16,
  },
  weekNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginBottom: 8,
  },
  navArrow: { fontSize: 20, color: theme.primary },
  weekLabel: { fontSize: 16, fontWeight: "600", color: theme.dark },
  activeDays: {
    textAlign: "center",
    fontSize: 15,
    color: theme.textSecondary,
    marginBottom: 20,
  },
  tipCard: {
    backgroundColor: colors.orange[50],
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.orange[500],
  },
  tipTitle: { fontSize: 16, fontWeight: "600", color: theme.dark, marginBottom: 8 },
  tipText: { fontSize: 14, color: theme.textSecondary, lineHeight: 20 },
  logoutBtn: { marginTop: 32, alignItems: "center" },
  logoutText: { color: theme.textLight, fontSize: 14 },
});
