import { Linking } from "react-native";
import { updateData } from "./Database";
import { HistoryEntry } from "@/app/(tabs)/history";

export type SubmissionData = {
  countryPrefix: string;
  phoneNumber: string;
};

function sanitizeNumber(phoneNumber: string) {
  return phoneNumber.replaceAll(" ", "");
}

export function openWhatsApp(data: SubmissionData) {
  const baseURL = "https://wa.me/";

  if (!data.phoneNumber) {
    return;
  }

  console.log(data);
  data.phoneNumber = sanitizeNumber(data.phoneNumber);
  let phoneNumberComplete;

  data.phoneNumber.startsWith("+")
    ? (phoneNumberComplete = data.phoneNumber)
    : (phoneNumberComplete = data.countryPrefix + data.phoneNumber);
  const whatsAppURL = baseURL + phoneNumberComplete;

  const historyEntry: HistoryEntry = {
    phoneNumber: phoneNumberComplete,
    timestamp: Date.now(),
  };
  updateData(historyEntry);

  console.log(phoneNumberComplete);
  console.log(whatsAppURL);
  Linking.openURL(whatsAppURL);
}

export function validateWhatsApp(values: SubmissionData) {
  const errors: any = {};
  console.log(values);

  //   validate phone number using regex
  const validNumberPattern = /^\+?[+\d ]*$/gm;

  //   Tokelau and Niue
  const minNumberLength = 4;
  //   North Korea
  const maxNumberLength = 17;

  if (!validNumberPattern.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number Contains Invalid Characters";
  } else if (values.phoneNumber.length < minNumberLength) {
    errors.phoneNumber = "Phone Number too Short";
  } else if (values.phoneNumber.length > maxNumberLength) {
    errors.phoneNumber = "Phone Number too Long";
  }

  return errors;
}
