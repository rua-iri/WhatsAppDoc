import { HeaderBar } from "@/components/HeaderBar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({});

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <ThemeProvider value={DefaultTheme}>
      <HeaderBar />
      <View style={{ borderWidth: 0.5, opacity: 0.5 }}></View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
