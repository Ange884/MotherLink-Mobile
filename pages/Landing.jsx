import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.circleTopRight]} />
      <View style={[styles.rectangle, styles.rectangleBottomLeft]} />

      <View style={styles.centerContent}>
        <Image
          source={require("../assets/images/logo.png")} // ← your logo image path
          style={styles.logo}
        />
        <Text style={styles.title}>MotherLink</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
    width: 60, // size of your logo image
    height: 60,
    marginBottom: 10,
    resizeMode: "contain", // keeps logo aspect ratio
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
});
