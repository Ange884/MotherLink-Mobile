// components/HomeVisitForm.jsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const HomeVisitForm = ({ onClose }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.card}>
      <Text style={[styles.title, { fontFamily: "Poppins_700Bold" }]}>Start Home Visit</Text>

      <TextInput
        placeholder="Patient Name"
        style={[styles.input, { fontFamily: "Poppins_400Regular" }]}
      />
      <TextInput
        placeholder="Location"
        style={[styles.input, { fontFamily: "Poppins_400Regular" }]}
      />
      <TextInput
        placeholder="Reason for Visit"
        style={[styles.input, { fontFamily: "Poppins_400Regular" }]}
      />

      <TouchableOpacity style={styles.submit}>
        <Text style={[styles.submitText, { fontFamily: "Poppins_700Bold" }]}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose}>
        <Text style={[styles.cancel, { fontFamily: "Poppins_400Regular" }]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  title: { fontSize: 18, marginBottom: 15, color: "#09111E" },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 6,
  },
  submit: {
    backgroundColor: "#09111E",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 10,
    marginTop: 8,
  },
  submitText: { color: "#fff", textAlign: "center", fontSize: 15 },
  cancel: { color: "#777", marginTop: 10 },
});

export default HomeVisitForm;
