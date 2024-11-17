import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

const Category = ({ route }: { route: any }) => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTitle: `${id}`,
          headerStyle: { backgroundColor: "#5A55CA" },
          headerTintColor: "white",
        }}
      />
      <View>
        <Text>{id}</Text>
      </View>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({});
