import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function HeaderBar() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(64,121,9,1)",
          "rgba(41,163,56,1)",
          "rgba(92,202,94,1)",
          "transparent",
        ]}
        style={styles.background}
      >
        <Text style={styles.text}>WhatsAppDoc</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 50,
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    // borderBottomWidth: 1,
    zIndex: 1,
  },
  text: {
    width: "auto",
    textAlign: "center",
    fontWeight: "100",
    fontSize: 30,
  },
});
