import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { Button, Linking, StyleSheet, TextInput, View } from "react-native";
import { CountryCodesPhone } from "./CountryCodesPhone";

type SubmissionData = {
  countryPrefix: string;
  phoneNumber: string;
};

export function ContactForm() {
  function sanitizeNumber(phoneNumber: string) {
    return phoneNumber.replaceAll(" ", "");
  }

  function openWhatsApp(data: SubmissionData) {
    const baseURL = "https://wa.me/";

    console.log(data);
    data.phoneNumber = sanitizeNumber(data.phoneNumber);
    const phoneNumberComplete = `${data.countryPrefix}${data.phoneNumber}`;
    console.log(phoneNumberComplete);

    const whatsAppURL = baseURL + phoneNumberComplete;
    console.log(whatsAppURL);
    Linking.openURL(whatsAppURL);
  }

  return (
    <View>
      <Formik
        initialValues={{ countryPrefix: "+44", phoneNumber: "" }}
        onSubmit={(values: SubmissionData) => openWhatsApp(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <Picker
                onValueChange={handleChange("countryPrefix")}
                onBlur={handleBlur("countryPrefix")}
                selectedValue={values.countryPrefix}
                style={styles.multiSelect}
              >
                <CountryCodesPhone />
              </Picker>

              <TextInput
                keyboardType="number-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                style={styles.numInput}
              />
            </View>
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  numInput: {
    width: 150,
    height: 30,
    borderColor: "#202020",
    borderWidth: 2,
    borderRadius: 3,
    padding: 2,
    marginVertical: 10,
  },
  inputContainer: {
    display: "flex",
    borderWidth: 1,
    marginVertical: 10,
  },
  multiSelect: {
    width: 200,
  },
});
