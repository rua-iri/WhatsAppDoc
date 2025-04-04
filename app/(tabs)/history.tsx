import { Animated, StyleSheet, Text, View } from "react-native";

export default function Tab() {
  const tempList = Array.from(Array(100).keys());
  const tempElems = tempList.map((elem) => <Text key={elem}>{elem}</Text>);

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.scrollContainer}>
        <Text>Tab [Home | History]</Text>
        <View>{tempElems}</View>
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
    marginTop: 60,
    marginBottom: 20,
  },
});
