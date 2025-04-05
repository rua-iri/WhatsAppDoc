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
    height: 50,
    borderEndStartRadius: 25,
    borderEndEndRadius: 25,
    paddingTop: 3,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    zIndex: 1,
  },
  text: {
    width: "auto",
    textAlign: "center",
    color: "rgb(29, 29, 29)",
    userSelect: "none",
    fontFamily: "SourGummy",
    fontWeight: "200",
    fontSize: 30,
  },
});
