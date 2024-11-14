import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
export default function OnBoarding() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/splash.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.headText}>Welcome To HelpHub</Text>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)")}
          style={styles.button}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    width: "100%",
    height: height * 0.7,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    objectFit: "cover",
  },

  bottom: {
    backgroundColor: "#FE5F55",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    fontFamily: "CourierItalicBold",
  },

  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
