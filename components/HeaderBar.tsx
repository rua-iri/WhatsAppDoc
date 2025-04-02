import { Image, StyleSheet, Text, View } from "react-native";

export function HeaderBar() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>WhatsAppDoc</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    borderBottomWidth: 1,
    zIndex: 1,
  },
  text: {
    width: "auto",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
