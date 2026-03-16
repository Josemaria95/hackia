import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";
import { colors, theme } from "../../lib/theme";
import PetDisplay from "../../components/PetDisplay";

const AGE_GROUPS = [
  { value: "4-6", label: "4-6 años" },
  { value: "7-12", label: "7-12 años" },
];

export default function SelectMascotScreen() {
  const [mascotName, setMascotName] = useState("");
  const [childName, setChildName] = useState("");
  const [ageGroup, setAgeGroup] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleStart() {
    if (!mascotName.trim() || !childName.trim() || !ageGroup) {
      Alert.alert("Completa todos los campos");
      return;
    }

    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      Alert.alert("Error", "No se encontró la sesión");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("children").insert({
      parent_id: user.id,
      name: childName.trim(),
      mascot_type: "luna",
      mascot_name: mascotName.trim(),
      age_group: ageGroup,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    router.replace("/(app)/checkin");
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Conoce a tu compañera</Text>
      <Text style={styles.subtitle}>
        Ella te acompañará todos los días
      </Text>

      <View style={styles.mascotContainer}>
        <PetDisplay mood="happy" name="" size={160} showName={false} />
      </View>

      <Text style={styles.label}>¿Cómo quieres llamarla?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de tu mascota"
        placeholderTextColor={colors.gray[300]}
        value={mascotName}
        onChangeText={setMascotName}
      />

      <Text style={styles.label}>¿Cuál es tu nombre?</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        placeholderTextColor={colors.gray[300]}
        value={childName}
        onChangeText={setChildName}
      />

      <Text style={styles.label}>¿Cuántos años tienes?</Text>
      <View style={styles.ageRow}>
        {AGE_GROUPS.map((ag) => (
          <Pressable
            key={ag.value}
            style={[styles.ageBtn, ageGroup === ag.value && styles.ageBtnSelected]}
            onPress={() => setAgeGroup(ag.value)}
          >
            <Text
              style={[
                styles.ageText,
                ageGroup === ag.value && styles.ageTextSelected,
              ]}
            >
              {ag.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={[styles.startBtn, loading && { opacity: 0.6 }]}
        onPress={handleStart}
        disabled={loading}
      >
        <Text style={styles.startText}>
          {loading ? "Creando..." : "¡Comenzar!"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.dark,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: theme.textSecondary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  mascotContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.dark,
    marginBottom: 8,
    marginTop: 4,
  },
  input: {
    backgroundColor: theme.bgCard,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.border,
    color: theme.text,
  },
  ageRow: { flexDirection: "row", gap: 12, marginBottom: 28 },
  ageBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: theme.bgCard,
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.border,
  },
  ageBtnSelected: { borderColor: theme.primary, backgroundColor: colors.purple[50] },
  ageText: { fontSize: 15, color: theme.textSecondary },
  ageTextSelected: { color: theme.primary, fontWeight: "600" },
  startBtn: {
    backgroundColor: theme.primary,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  startText: { color: "#FFF", fontSize: 18, fontWeight: "700" },
});
