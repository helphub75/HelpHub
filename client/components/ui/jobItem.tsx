import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const JobItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/category/${title}`)}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={{ marginLeft: 10 }}>
        <AntDesign name="rightcircle" color={"#5A55CA"} size={22} />
      </View>
    </TouchableOpacity>
  );
};

export default JobItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    gap: 30,
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5A55CA",
    fontFamily: "MuliBold",
  },
  description: {
    fontSize: 14,
    color: "#444",
    fontFamily: "Muli",
  },
});
