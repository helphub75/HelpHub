import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign } from "@expo/vector-icons";

import { jobs, jobType } from "../../data/index";
import JobItem from "@/components/ui/jobItem";
import { useUserStore } from "@/store/userStore";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.welcomeText}>Welcome, Jorge</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Need an assistance?"
            placeholderTextColor={"#5A55CA"}
            style={styles.input}
          />
          <AntDesign
            name="search1"
            color={"#666"}
            size={20}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={jobs}
          renderItem={({ item }: { item: jobType }) => (
            <JobItem
              title={item.title}
              description={item.description}
              key={item.title}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: "#5A55CA",
  },
  top: {
    backgroundColor: "#5A55CA",
    height: height * 0.4,
    width: width,
    padding: 20,
    gap: 20,
  },
  bottom: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: "absolute",
    top: height * 0.25,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 200,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "MuliBold",
  },
  inputContainer: {
    position: "relative",
    borderRadius: 50,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    height: 50,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Muli",
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    top: 15,
  },
});
