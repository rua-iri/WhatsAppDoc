import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import {
  Linking,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { countryCodes } from "./CountryCodesPhone";
import { Image } from "expo-image";

type SubmissionData = {
  countryPrefix: string;
  phoneNumber: string;
};

export function ContactForm() {
  const countryCodeElements = countryCodes.map((elem) => (
    <Picker.Item
      key={elem.name}
      label={`${elem.name} (${elem.dial_code})`}
      value={elem.dial_code}
    />
  ));

  function sanitizeNumber(phoneNumber: string) {
    return phoneNumber.replaceAll(" ", "");
  }

  function openWhatsApp(data: SubmissionData) {
    const baseURL = "https://wa.me/";

    if (!data.phoneNumber) {
      return;
    }

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
                {countryCodeElements}
              </Picker>

              <TextInput
                keyboardType="number-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                style={styles.numInput}
                onSubmitEditing={() => handleSubmit()}
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
              <Image
                style={styles.linkIcon}
                source={require("../assets/icons/arrow-external-link.svg")}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  numInput: {
    width: 300,
    height: 30,
    borderColor: "#202020",
    borderWidth: 2,
    borderRadius: 30,
    padding: 2,
    marginVertical: 5,
  },
  inputContainer: {
    display: "flex",
    marginVertical: 10,
  },
  multiSelect: {
    width: 300,
    height: 40,
    marginVertical: 5,
    borderRadius: 10,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "rgb(68, 192, 83)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    marginVertical: 20,
    paddingVertical: 5,
  },
  submitButtonText: {
    color: "rgb(230, 230, 230)",
  },
  linkIcon: {
    width: 15,
    height: 15,
    color: "white",
  },
});
