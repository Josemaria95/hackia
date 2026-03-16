import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { EMOTION_OPTIONS, MOOD_STYLES } from "../lib/pet-reactions";
import { theme } from "../lib/theme";

interface Props {
  onSelect: (emotion: string) => void;
  selected?: string;
  petName: string;
}

export default function EmotionPicker({ onSelect, selected, petName }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cómo se siente {petName}?</Text>
      <View style={styles.row}>
        {EMOTION_OPTIONS.map((e) => {
          const moodStyle = MOOD_STYLES[e.mood];
          const isSelected = selected === e.value;
          return (
            <Pressable
              key={e.value}
              onPress={() => onSelect(e.value)}
              style={[
                styles.button,
                isSelected && { borderColor: e.color, backgroundColor: e.color + "15" },
              ]}
            >
              <View style={[styles.miniMascot, { opacity: moodStyle.opacity }]}>
                <Image
                  source={require("../assets/logo.png")}
                  style={[
                    styles.miniImage,
                    { transform: [{ scale: moodStyle.scale }] },
                  ]}
                  resizeMode="contain"
                />
              </View>
              <Text style={[styles.label, isSelected && { color: e.color, fontWeight: "700" }]}>
                {e.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingVertical: 16 },
  title: { fontSize: 18, fontWeight: "600", color: theme.dark, marginBottom: 16 },
  row: { flexDirection: "row", gap: 8, paddingHorizontal: 8 },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 16,
    backgroundColor: theme.bgCard,
    borderWidth: 2,
    borderColor: "transparent",
    flex: 1,
  },
  miniMascot: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  miniImage: { width: 40, height: 40 },
  label: { fontSize: 10, color: theme.textSecondary, marginTop: 4, textAlign: "center" },
});
