import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import BackgroundLayout from "../components/background.jsx";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <BackgroundLayout>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {/* Row: Remember Me + Forgot Password */}
      <View style={styles.row}>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              { backgroundColor: rememberMe ? "#09111E" : "#fff" },
            ]}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </BackgroundLayout>
  );
}

const styles = StyleSheet.create({
  logo: { width: 60, height: 60, marginBottom: 10, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#000" },
  input: {
    width: 300,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    marginBottom: 15,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width:18,
    height: 18,
    borderWidth: 2,
    borderColor: "#09111E",
    borderRadius: 4,
  },
  rememberText: {
    marginLeft: 8,
    color: "#000",
  },
  button: {
    backgroundColor: "#09111E",
    padding: 15,
    borderRadius: 8,
    width: 300,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  forgotText: { color: "#09111E" },
});
