import { HistoryEntry } from "@/app/(tabs)/history";
import { StyleSheet, Text, View } from "react-native";

export function HistoryItem({ phoneNumber, timestamp }: HistoryEntry) {
  const date = new Date(timestamp);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{phoneNumber}</Text>
      <Text style={styles.text}>{date.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    marginVertical: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
  },
});
