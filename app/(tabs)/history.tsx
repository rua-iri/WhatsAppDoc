import { HistoryItem } from "@/components/HistoryItem";
import { getData } from "@/utils/Database";
import { useEffect, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export type HistoryEntry = {
  phoneNumber: string;
  timestamp: number;
};

export default function Tab() {
  const [histArray, setHistArray] = useState([]);

  const histItems = histArray?.map((item: HistoryEntry) => (
    <HistoryItem
      key={item.timestamp}
      phoneNumber={item.phoneNumber}
      timestamp={item.timestamp}
    />
  ));

  async function retrieveHistory() {
    const historyData = await getData();
    console.log(historyData);
    setHistArray(historyData);
  }

  useEffect(() => {
    retrieveHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.scrollContainer}>
        <Text style={styles.pageTitle}>App History</Text>
        <View style={styles.itemContainer}>{histItems}</View>
        <View>
          <Pressable
            style={styles.deleteButton}
            onPress={() => alert("Deleting History")}
          >
            <Text style={styles.deleteButtonText}>Clear History</Text>
          </Pressable>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  pageTitle: {
    fontSize: 25,
  },
  itemContainer: {
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: "rgb(192, 68, 68)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    marginVertical: 20,
    paddingVertical: 5,
  },
  deleteButtonText: {
    color: "rgb(230, 230, 230)",
  },
});
