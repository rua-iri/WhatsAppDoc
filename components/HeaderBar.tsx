import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function HeaderBar() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgb(87, 230, 104)", "rgba(159, 236, 161, 0.91)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[StyleSheet.absoluteFill, styles.background]}
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
    borderEndStartRadius: 25,
    borderEndEndRadius: 25,
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    zIndex: 1,
  },
  text: {
    width: "auto",
    textAlign: "center",
    fontWeight: "100",
    fontSize: 30,
    color: "rgb(29, 29, 29)",
    userSelect: "none",
  },
});
