import { ContactForm } from "@/components/ContactForm";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/images/whatsappdoc_logo.png")}
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
    width: 150,
    height: 150,
  },
  imageView: {
    padding: 5,
    backgroundColor: "rgba(139, 233, 142, 0.62)",
    borderRadius: 500,
    marginBottom: 50,
  },
});
