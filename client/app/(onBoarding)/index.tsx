import OnBoardingSlider from "@/components/ui/OnBoardingSlider";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");
export default function OnBoarding() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const checkFirstTimeUse = async () => {
      const isFirstTime = await AsyncStorage.getItem("isFirstTimeUse");
      if (isFirstTime === null) {
        setShowIntro(true);
        await AsyncStorage.setItem("isFirstTimeUse", "false");
      }
    };

    checkFirstTimeUse();
  }, []);

  function handleDone() {
    setShowIntro(false);
  }

  if (showIntro) {
    return <OnBoardingSlider onDone={handleDone} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/welcome.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={{ fontWeight: "bold", fontSize: 22, color: "#fff" }}>
          <Image
            source={require("@/assets/images/logo_text.png")}
            style={{ width: width * 0.5, height: 35, objectFit: "cover" }}
          />
        </Text>
        <Text style={styles.headText}>
          Connecting Work with Talent, Seamlessly
        </Text>

        <Text style={styles.missionText}>
          HelpHub connects businesses with skilled virtual assistants,
          streamlining the hiring process to ensure the right talent meets the
          right tasks.
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.signInButton}
            activeOpacity={0.6}
          >
            <Text style={styles.signInText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signUp")}
            style={styles.signUpButton}
            activeOpacity={0.6}
          >
            <Text style={styles.signUpText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#5A55CA",
  },

  imageContainer: {
    width: "100%",
    height: height * 0.5,
    backgroundColor: "#fff",
    // borderBottomLeftRadius: 150,
    borderBottomRightRadius: 120,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  bottom: {
    backgroundColor: "#5A55CA",
    flex: 1,
    width: "100%",
    padding: 20,
    gap: 10,
    borderTopRightRadius: 150,
  },
  headText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "MuliBold",
  },
  buttonsContainer: {
    marginVertical: 10,
    gap: 15,
  },
  signInButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  signInText: {
    color: "#333",
    fontSize: 16,
    fontFamily: "MuliBold",
  },
  signUpButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 14,
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  signUpText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "MuliBold",
  },
  missionText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
  },
});
