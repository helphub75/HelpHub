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
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { Feather, Octicons } from "@expo/vector-icons";
import * as Yup from "yup";
import { useFormik } from "formik";

const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log(values, "SignUp Data");
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
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
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
                Sign Up
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "Muli",
                }}
              >
                Create a new account
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, fontFamily: "MuliBold" }}>Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your name"
                  style={styles.input}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  selectionColor={"#5A55CA"}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

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
                  secureTextEntry={!passwordVisible}
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

              <Text style={{ fontSize: 16, fontFamily: "MuliBold" }}>
                Confirm Password
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Confirm password"
                  secureTextEntry={!confirmPasswordVisible}
                  style={styles.input}
                  autoCapitalize="none"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  selectionColor={"#5A55CA"}
                />
                <TouchableOpacity
                  onPress={() => setConfirmPasswordVisible((prev) => !prev)}
                >
                  <Octicons
                    name={confirmPasswordVisible ? "eye" : "eye-closed"}
                    size={20}
                    color={"rgba(0,0,0,0.5)"}
                  />
                </TouchableOpacity>
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              activeOpacity={0.6}
              onPress={handleSubmit}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpScreen;

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
  signUpButton: {
    backgroundColor: "#5A55CA",
    padding: 15,
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

  socialIconContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: -8,
    fontFamily: "Muli",
  },
});
