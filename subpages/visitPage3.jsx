import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons } from '@expo/vector-icons';

export default function VisitPage3({ onClose, onBack, onFinish }) {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null); // new: track focused field

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (onBack) {
            onBack();
          }
        }}
      >
        <Text style={[styles.backText, { fontFamily: "Poppins_400Regular" }]}>Back</Text>
      </TouchableOpacity>

      {/* Close Icon */}
      {onClose && (
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClose}
          hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={20} color="#09111E" />
        </TouchableOpacity>
      )}

      <Text style={[styles.subtitle, { fontFamily: "Poppins_400Regular" }]}>
        Start Home Visit
      </Text>

      {/* Email Fieldset */}
      <View
        style={[
          styles.fieldset,
          { borderColor: focusedField === "email" ? "#1048C5" : "#09111E" },
        ]}
      >
        <Text style={[styles.legend,{ fontFamily: "Poppins_400Regular",fontWeight:"600" }]}>Followup Needed</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[styles.input, { fontFamily: "Poppins_400Regular",fontWeight:"600"  }]}
          placeholder="Select...."
          placeholderTextColor="#09111E"
          underlineColorAndroid="transparent"
          selectionColor="#09111E"
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
        />
      </View>

<View
        style={[
          styles.fieldset,
          { borderColor: focusedField === "email" ? "#1048C5" : "#09111E" },
        ]}
      >
        <Text style={[styles.legend,{ fontFamily: "Poppins_400Regular",fontWeight:"600" }]}>Notes</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[styles.input, { fontFamily: "Poppins_400Regular",fontWeight:"600"  }]}
          placeholder="Additional notes..."
          placeholderTextColor="#09111E"
          underlineColorAndroid="transparent"
          selectionColor="#09111E"
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (onFinish) {
            onFinish();
            return;
          }
          if (onClose) {
            onClose();
          }
        }}
      >
        <Text
          style={[styles.buttonText, { fontFamily: "Poppins_400Regular" ,fontWeight:200}]}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingTop: 20,
  },
   closeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    zIndex: 10,
    padding: 4,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 20,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },

  
  logo: { width: 60, height: 60, resizeMode: "contain" },
  title: { fontSize: 18, fontFamily:"Poppins_700Bold", fontWeight:"900", marginBottom: 20, color: "#09111E" },
  subtitle:{ fontSize: 16, fontFamily:"Poppins_700Bold", fontWeight:"700", marginBottom: 15, color: "#09111E" },

  fieldset: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
    position: "relative",
    paddingTop: 10,
    marginVertical: 12,
  },
  signupText: {
    fontSize: 14,
    color: "#09111E",
    textAlign: "left",
    marginTop: 15,
    fontFamily: "Poppins_400Regular",
  },
  loginLink: {
    color: "#063392ff", // blue link color
    fontWeight: "bold",
    marginEnd:65,
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
    fontSize: 10,
    color: "#09111E",
    borderWidth: 0, // ensures no extra border
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
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#454546ff",
    borderRadius: 4,
  },
  rememberText: {
    marginLeft: 8,
    color: "#09111E",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#09111E",
    padding: 12,
    marginTop: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  forgotText: { color: "#09111E",fontSize:12 },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  backText: {
    color: "#09111E",
    fontSize: 12,
  },
});
