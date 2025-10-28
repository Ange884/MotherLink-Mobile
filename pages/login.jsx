import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BackgroundLayout from "./BackgroundLayout";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <BackgroundLayout>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
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
  button: {
    backgroundColor: "#09111E",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: 300,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  forgotText: { color: "#09111E", marginTop: 10 },
});
