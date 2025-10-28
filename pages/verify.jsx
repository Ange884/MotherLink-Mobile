import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function VerifyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/cuate.png")}
          style={styles.image}
        />
      </View>

      {/* Headings */}
      <Text style={styles.mainHeading}>Enter OTP</Text>
      <Text style={styles.subHeading}>
        A 4-digit OTP has been sent to
      </Text>
      <Text style={styles.subHeading}>+1 458-465-6466</Text>

      {/* OTP Boxes */}
      <View style={styles.boxesContainer}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Verify pressed")}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#EDEDED",
    justifyContent:"flex-end"
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  subHeading: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  boxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 30,
    marginBottom: 30,
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#09111E",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#09111E",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  resendText: {
    color: "#09111E",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
