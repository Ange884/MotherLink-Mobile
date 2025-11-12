import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function RegisterMother({ navigation }) {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.headerSection}>
        <Text style={[styles.headerText, { fontFamily: "Poppins_700Bold" }]}>
          Register mother
        </Text>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.step, styles.activeStep]} />
          <View style={styles.step} />
          <View style={styles.step} />
          <View style={styles.step} />
        </View>

        {/* Step text */}
        <Text style={styles.stepText}>Step 1 of 4</Text>

        {/* Card */}
        <View style={styles.card}>
          <Text
            style={[styles.cardText, { fontFamily: "Poppins_700Bold" }]}
          >
            Personal details
          </Text>
        </View>
      </View>

      {/* Email Fieldset */}
      <View style={styles.fieldset}>
        <Text
          style={[
            styles.legend,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
        >
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[
            styles.input,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
          placeholder="Enter your email"
          placeholderTextColor="#09111E"
          underlineColorAndroid="transparent"
          selectionColor="#09111E"
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
        />
      </View>

      {/* Password Fieldset */}
      <View style={styles.fieldset}>
        <Text
          style={[
            styles.legend,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
        >
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[
            styles.input,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#09111E"
          underlineColorAndroid="transparent"
          selectionColor="#09111E"
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
        />
      </View>

      {/* Confirm Password Fieldset */}
      <View style={styles.fieldset}>
        <Text
          style={[
            styles.legend,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
        >
          Confirm Password
        </Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={[
            styles.input,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
          placeholder="Confirm your password"
          placeholderTextColor="#09111E"
          underlineColorAndroid="transparent"
          selectionColor="#09111E"
          onFocus={() => setFocusedField("confirm")}
          onBlur={() => setFocusedField(null)}
        />
      </View>

      {/* Login link */}
      <Text style={[styles.signupText, { fontWeight: "600" }]}>
        Already have an account?
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Login
        </Text>
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("signup2")}
      >
        <Text
          style={[
            styles.buttonText,
            { fontFamily: "Poppins_400Regular", fontWeight: "600" },
          ]}
        >
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: 40,
  },

  // === Header ===
  headerSection: {
    width: "100%",
    backgroundColor: "#0B0F2F",
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 8,
  },
  step: {
    flex: 1,
    height: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
    borderRadius: 3,
  },
  activeStep: {
    backgroundColor: "#1E40AF",
  },
  stepText: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#000",
  },

  // === Inputs ===
  fieldset: {
    width: 300,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
    position: "relative",
    paddingTop: 10,
    marginVertical: 17,
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 15,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 6,
    fontSize: 14,
    color: "#09111E",
  },
  input: {
    padding: 12,
    fontSize: 12,
    color: "#09111E",
  },

  signupText: {
    fontSize: 14,
    color: "#09111E",
    marginTop: 15,
  },
  loginLink: {
    color: "#063392",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#09111E",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
