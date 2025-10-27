import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function LandingScreen({ navigation }) { // receive navigation prop
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.circleTopRight]} />
      <View style={[styles.rectangle, styles.rectangleBottomLeft]} />

      <View style={styles.centerContent}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>MotherLink</Text>

        {/* Forgot Password Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ForgotPassword")} // navigate to ForgotPasswordScreen
        >
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
    
  },
  circle: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#0a1a2f",
    opacity: 0.9,
  },
  circleTopRight: {
    top: 60,
    right: -40,
  },
  rectangle: {
    position: "absolute",
    width: 150,
    height: 100,
    backgroundColor: "#0a1a2f",
    opacity: 0.9,
    transform: [{ rotate: "-25deg" }],
  },
  rectangleBottomLeft: {
    bottom: 60,
    left: -40,
  },
  centerContent: {
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0a1a2f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
