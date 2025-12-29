import { useAppTheme } from "@/src/theme/useAppTheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { colors } = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray2,
        tabBarStyle: {
          backgroundColor: colors.charcoalGrey,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: colors.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? colors.primary : colors.gray2}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progresso",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="line-chart"
                size={24}
                color={focused ? colors.primary : colors.gray2}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="user"
                size={24}
                color={focused ? colors.primary : colors.gray2}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
