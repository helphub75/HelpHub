import { onBoardingType } from "@/data";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Welcome to HelpHub!",
    text: "Easily find the right virtual assistant for your business needs. Post job requirements, and let our team help you connect with skilled professionals ready to assist!",
    image: require("../../assets/images/onBoarding/onBoardOne.png"),
  },
  {
    key: "2",
    title: "Streamlined Hiring Process",
    text: "Submit detailed job descriptions, and our admin team will review, approve, and assign the best-suited virtual assistant for your tasks. Simplify your hiring journey with HelpHub.",
    image: require("../../assets/images/onBoarding/onBoardTwo.png"),
  },
  {
    key: "3",
    title: "Track and Manage Jobs",
    text: "Stay updated on the status of your job postings. Easily view your job submissions, check approval status, and see who has been assigned to help you!",
    image: require("../../assets/images/onBoarding/onBoardThree.png"),
  },
];

const OnBoardingSlider = ({ onDone }: { onDone: () => void }) => {
  const renderItem = ({ item }: { item: onBoardingType }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>Done</Text>
    </View>
  );

  const renderSkipButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>Skip</Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      activeDotStyle={{ backgroundColor: "#5A55CA" }}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      showSkipButton
      onSkip={onDone}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  title: {
    fontSize: 24,
    color: "#5A55CA",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "MuliBold",
  },
  image: {
    width: width,
    height: height * 0.5,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "Muli",
  },
  buttonCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#5A55CA",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "MuliBold",
  },
});

export default OnBoardingSlider;
