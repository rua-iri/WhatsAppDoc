import { HistoryEntry } from "@/app/(tabs)/history";
import AsyncStorage from "@react-native-async-storage/async-storage";

const historyKey = "wad_history";

export const storeData = async (value: Array<HistoryEntry>) => {
  try {
    const data = JSON.stringify(value);

    await AsyncStorage.setItem(historyKey, data);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async () => {
  try {
    const value: string | null = await AsyncStorage.getItem(historyKey);
    if (value) {
      const data = JSON.parse(value);
      return data;
    }
    return value;
  } catch (e) {
    console.error(e);
  }
};

export const updateData = async (value: HistoryEntry) => {
  try {
    const currentData: Array<HistoryEntry> | null = await getData();

    if (currentData) {
      currentData.push(value);
      storeData(currentData);
      return;
    }

    storeData([value]);
  } catch (e) {
    console.error(e);
  }
};

export const purgeData = async () => {
  try {
    await AsyncStorage.removeItem(historyKey);
  } catch (e) {
    console.error(e);
  }
};
