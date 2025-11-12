import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function InfoSection() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerSection}>
        <Text style={[styles.headerText, { fontFamily: "Poppins_700Bold" }]}>
          Register mother
        </Text>

        {/* Small centered header content */}
        <View style={styles.headerContent}>
          {/* Progress bar */}
          <View style={styles.progressContainer}>
            <View style={styles.step} />
            <View style={styles.step} />
            <View style={[styles.step, styles.activeStep]} />
            <View style={styles.step} />
          </View>

          {/* Step text */}
          <Text style={[styles.stepText, {fontFamily: "Poppins_400Regular"}]}>Step 3 of 4</Text>

          {/* Card */}
          <View style={styles.card}>
            <Text
              style={[styles.cardText, { fontFamily: "Poppins_700Bold" }]}
            >
             Pregnancy Information
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paragraphBox}>
        <Text style={styles.paragraphText}>
          This application helps you register mothers and manage their records easily.
          By providing accurate personal information, you ensure that health workers
          can deliver better services. Please take a moment to confirm all details
          before submitting. The data collected is stored securely and used only
          for authorized purposes.
        </Text>
      </View>

      {/* Terms and Conditions Box */}
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          By proceeding, you accept the{" "}
          <Text style={styles.highlight}>terms and conditions</Text> of this service.
        </Text>
      </View>

      {/* Optional Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept & Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  paragraphBox: {
    borderWidth: 1.5,
    borderColor: "#09111E",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },

    headerSection: {
    width: "100%",
    backgroundColor: "#0B0F2F",
    paddingTop: 60,
    paddingBottom: 35,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    marginBottom: 15,
    alignSelf: "flex-start",
    marginLeft: 35,
  },
  headerContent: {
    width: 300,
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
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

  paragraphText: {
    fontSize: 14,
    color: "#09111E",
    lineHeight: 22,
  },
  termsBox: {
    borderWidth: 1,
    borderColor: "#1E3A8A",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F0F4FF",
    marginBottom: 20,
  },
  termsText: {
    fontSize: 13,
    color: "#1E3A8A",
  },
  highlight: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#09111E",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
