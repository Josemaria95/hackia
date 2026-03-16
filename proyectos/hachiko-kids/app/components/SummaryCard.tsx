import { StyleSheet, Text, View } from "react-native";
import { colors, theme } from "../lib/theme";

interface Props {
  title: string;
  icon: string;
  description: string;
  color?: string;
}

export default function SummaryCard({
  title,
  icon,
  description,
  color = colors.purple[500],
}: Props) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.bgCard,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  icon: { fontSize: 22, marginRight: 8 },
  title: { fontSize: 16, fontWeight: "600", color: theme.dark },
  description: { fontSize: 14, color: theme.textSecondary, lineHeight: 20 },
});
