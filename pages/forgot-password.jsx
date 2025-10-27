import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ForgotPasswordScreen() {
     const [countryCode, setCountryCode] = useState("+250");
     const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={styles.container}>
      {/* Top images */}
      <View style={styles.imagesContainer}>
        <Image
          source={require("../assets/images/Character.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/Screen.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/Plant.png")}
          style={styles.image}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Forgot Password?</Text>

      {/* Subparagraph */}
      <Text style={styles.subParagraph}>
        Don't worry! it happens. Please enter phone number associated with your account
      </Text>

      {/* Subheading */}
      <Text style={styles.subHeading}>Enter Your Number</Text>

      {/* Input field */}
      <TextInput
        style={styles.input}
        placeholder="Your number"
        keyboardType="phone-pad"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDEDED",
    justifyContent: "center", // content starts from top
    alignItems: "center",
    bottom:0,
  },
  imagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%", // fill the width
    marginBottom: 30,
    justifyContent:"center",
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 150,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subParagraph: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "flex-start", // align left
    marginBottom: 10,
    marginLeft:10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    borderRadius: 8,
    fontSize: 15,
    width: "95%",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0a1a2f",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "95%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
