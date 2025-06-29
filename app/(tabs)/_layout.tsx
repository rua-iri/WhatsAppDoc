import { HapticTab } from "@/components/HapticTab";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "rgb(36, 219, 36)",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="clock-o" color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
