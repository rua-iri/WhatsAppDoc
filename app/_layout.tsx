import { HeaderBar } from "@/components/HeaderBar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <HeaderBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
