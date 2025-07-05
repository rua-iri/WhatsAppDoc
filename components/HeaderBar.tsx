import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export function HeaderBar() {
  return (
    <MaskedView
      style={styles.maskedViewStyle}
      maskElement={
        <View style={styles.textView}>
          <Text style={styles.text}>WhatsAppDoc</Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <LinearGradient
        colors={["rgb(87, 230, 104)", "rgba(159, 236, 161, 0.91)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[StyleSheet.absoluteFill]}
      >
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  maskedViewStyle: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 60,
  },
  textView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "auto",
    fontSize: 30,
    color: "black",
    fontWeight: "400",
  },
});
