import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import { Feather, Octicons } from "@expo/vector-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useUserStore } from "@/store/userStore";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const login = useUserStore((state) => state.login);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values);
      } catch (error) {
        console.log("Login error:", error);
      }
    },
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                borderRadius: 10,
                padding: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="chevron-left" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={{ width: 40, height: 40, objectFit: "cover" }}
              />
            </View>

            <View style={styles.formTitleContainer}>
              <Text style={{ fontSize: 26, fontFamily: "MuliBold" }}>
                Login
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "Muli",
                }}
              >
                Login to continue using the app
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, fontFamily: "MuliBold" }}>
                Email
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your email"
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  selectionColor={"#5A55CA"}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={{ fontSize: 16, fontFamily: "MuliBold" }}>
                Password
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={!passwordVisible ? true : false}
                  style={styles.input}
                  autoCapitalize="none"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  selectionColor={"#5A55CA"}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible((prev) => !prev)}
                >
                  <Octicons
                    name={passwordVisible ? "eye" : "eye-closed"}
                    size={20}
                    color={"rgba(0,0,0,0.5)"}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View>
              <TouchableOpacity onPress={() => router.push("/")}>
                <Text
                  style={{
                    textAlign: "right",
                    color: "rgba(0,0,0,0.5)",
                    fontFamily: "Muli",
                    fontSize: 16,
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.signInButton}
              activeOpacity={0.6}
              onPress={handleSubmit}
            >
              <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.line} />
              <Text
                style={{
                  textAlign: "center",
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: "Muli",
                  fontSize: 16,
                  marginHorizontal: 10,
                }}
              >
                Or Login with
              </Text>
              <View style={styles.line} />
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity style={styles.socialIconContainer}>
                <Image
                  source={require("@/assets/images/auth/facebook_logo.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIconContainer}>
                <Image
                  source={require("@/assets/images/auth/google_logo.png")}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIconContainer}>
                <Image
                  source={require("@/assets/images/auth/apple_logo.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push("/(auth)/signUp")}>
              <Text
                style={{
                  textAlign: "center",
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: "Muli",
                  fontSize: 16,
                }}
              >
                Don't have an account?{" "}
                <Text style={{ color: "#5A55CA", fontFamily: "MuliBold" }}>
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
  },

  logoContainer: {
    backgroundColor: "#5A55CA",
    padding: 25,
    borderRadius: 100,
    width: 80,
    height: 80,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    gap: 10,
  },
  formTitleContainer: {},

  inputContainer: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 50,
    borderColor: "rgba(0,0,0,0.15)",
    backgroundColor: "rgba(0,0,0,0.03)",
    alignItems: "center",
  },
  input: {
    padding: 12,
    borderRadius: 50,
    width: "90%",
    fontFamily: "Muli",
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#5A55CA",
    padding: 15,
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  signInText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "MuliBold",
  },

  socialIconContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: -8,
    fontFamily: "Muli",
  },
});
