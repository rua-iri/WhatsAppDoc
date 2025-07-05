import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export function HeaderBar() {
  return (
    <MaskedView
      style={styles.maskedViewStyle}
      maskElement={
        <View
          style={{
            backgroundColor: "transparent",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "black",
              fontWeight: "bold",
            }}
          >
            WhatsAppDoc
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "rgb(87, 230, 104)",
        }}
      />
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "rgba(159, 236, 161, 0.91)",
        }}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  text: {
    width: "auto",
    // textAlign: "center",
    color: "rgb(29, 29, 29)",
    userSelect: "none",
    fontFamily: "SourGummy",
    fontWeight: "200",
    fontSize: 30,
  },
  divider: {
    height: 0,
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#050505",
    opacity: 0.5,
  },
  maskedViewStyle: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 60,
  },
});
