import { ContactForm } from "@/components/ContactForm";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/icons/stethoscope.svg")}
          style={styles.image}
        />
      </View>
      <ContactForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  imageView: {
    padding: 25,
    backgroundColor: "rgba(139, 233, 142, 0.62)",
    borderRadius: 500,
    marginBottom: 50,
  },
});
