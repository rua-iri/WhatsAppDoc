import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { countryCodes } from "./CountryCodesPhone";
import { Image } from "expo-image";

import {
  openWhatsApp,
  SubmissionData,
  validateWhatsApp,
} from "@/utils/FormHandling";

export function ContactForm() {
  const countryCodeElements = countryCodes.map((elem) => (
    <Picker.Item
      key={elem.name}
      label={`${elem.name} (${elem.dial_code})`}
      value={elem.dial_code}
    />
  ));

  return (
    <View>
      <Formik
        initialValues={{ countryPrefix: "+44", phoneNumber: "" }}
        onSubmit={(values: SubmissionData) => openWhatsApp(values)}
        validate={(values) => validateWhatsApp(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
                placeholder="Phone Number"
              />
            </View>

            <View>
              {Object.entries(errors).map(([key, value]) => (
                <Text key={key} style={styles.errorText}>
                  {value}
                </Text>
              ))}
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
    padding: 10,
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
  errorText: {
    color: "white",
    backgroundColor: "rgb(255, 34, 34)",
    textAlign: "center",
    borderRadius: 50,
    padding: 5,
  },
});
