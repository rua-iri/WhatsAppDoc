import { Text, View } from "react-native";

export function HeaderBar() {
  return (
    <View
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: 20,
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          width: "auto",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        WhatsAppDoc
      </Text>
    </View>
  );
}
