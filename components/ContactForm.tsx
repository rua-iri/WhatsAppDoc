import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import {
  Button,
  SectionListComponent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { CountryCodesPhone } from "./CountryCodesPhone";

type SubmissionData = {
  countryPrefix: string;
  phoneNumber: string;
};

export function ContactForm() {
  function openWhatsApp(data: SubmissionData) {
    console.log(data);
    const phoneNumber = data.phoneNumber;
    alert(JSON.stringify(data));
  }

  return (
    <View>
      <Formik
        initialValues={{ countryPrefix: "1", phoneNumber: "" }}
        onSubmit={(values: SubmissionData) => openWhatsApp(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View>
              <Picker
                onValueChange={handleChange("countryPrefix")}
                onBlur={handleBlur("countryPrefix")}
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
    marginTop: 10,
    marginBottom: 10,
  },
});
