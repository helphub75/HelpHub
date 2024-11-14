import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={28}
              name="home"
              color={focused ? "#FE5F55" : "gray"}
            />
          ),
          tabBarActiveTintColor: "#FE5F55",
        }}
      />
      <Tabs.Screen
        name="solutions"
        options={{
          title: "Solutions",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="solution1"
              size={24}
              color={focused ? "#FE5F55" : "gray"}
            />
          ),
          tabBarActiveTintColor: "#FE5F55",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={28}
              color={focused ? "#FE5F55" : "gray"}
            />
          ),
          tabBarActiveTintColor: "#FE5F55",
        }}
      />
    </Tabs>
  );
}
