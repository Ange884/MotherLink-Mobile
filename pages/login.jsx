import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
// import BackgroundLayout from "../components/background.jsx";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function LoginScreen({ navigation }) {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  if (!fontsLoaded) return null; // optionally <AppLoading />


    return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={[styles.title, { fontFamily: 'Poppins_400Regular' }]}>
        LOGIN
      </Text>

      {/* Inputs */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { fontFamily: 'Poppins_400Regular' }]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, { fontFamily: 'Poppins_400Regular' }]}
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
          <Text style={[styles.rememberText, { fontFamily: 'Poppins_400Regular' }]}>
            Remember Me
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.forgotText, { fontFamily: 'Poppins_400Regular' }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { fontFamily: 'Poppins_400Regular' }]}>
          Login
        </Text>
      </TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
  logo: { width: 60, height: 60, marginBottom: 10, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#000" },
  container: {
  flex: 1,
  justifyContent: "center", // Pushes everything to the bottom
  alignItems: "center",        // Centers horizontally
  backgroundColor: "#f8f8f8",  // optional
  paddingBottom: 40,           // adds space from the bottom edge
},

  input: {
    width: 300,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    marginBottom:20,
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
    width:16,
    height: 16,
    borderWidth: 1,
    borderColor: "#454546ff",
    borderRadius: 4,
  },
  rememberText: {
    marginLeft: 8,
    color: "#000",
  },
  button: {
    backgroundColor: "#09111E",
    padding: 15,
    marginTop:20,
    borderRadius: 8,
    width: 300,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  forgotText: { color: "#09111E" },
});
