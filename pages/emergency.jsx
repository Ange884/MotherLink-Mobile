import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import BottomNav from "../components/navbar.jsx";

const tabs = ["Overview", "Appointments", "Emergencies"];

const emergencies = [
  { date: "2025-10-14", description: "Severe pain", status: "Received" },
  { date: "2025-10-14", description: "Severe pain", status: "Received" },
  { date: "2025-10-14", description: "Severe pain", status: "Received" },
  { date: "2025-10-14", description: "Severe pain", status: "Received" },
];

const EmergencyScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [activeTab, setActiveTab] = useState("Emergencies");

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerBackground} />

      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (navigation && navigation.goBack) {
              navigation.goBack();
            }
          }}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <Image source={require("../assets/images/mariza.png")} style={styles.avatar} />
          <View style={styles.profileDetails}>
            <Text style={[styles.profileName, styles.fontBold]}>Jane Doe</Text>
            <Text style={[styles.profileId, styles.fontRegular]}>MI-077</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton, active && styles.activeTabButton]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, active ? styles.fontBold : styles.fontRegular, active && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          {/* Record Emergency Button */}
          <TouchableOpacity style={styles.recordButton}>
            <Text style={[styles.recordButtonText, styles.fontBold]}>Record emergency</Text>
          </TouchableOpacity>

          {/* Emergency List */}
          {emergencies.map((emergency, index) => (
            <View key={index} style={styles.emergencyCard}>
              <View style={styles.emergencyLeft}>
                <Text style={[styles.emergencyDate, styles.fontRegular]}>{emergency.date}</Text>
                <Text style={[styles.emergencyDescription, styles.fontBold]}>{emergency.description}</Text>
              </View>
              <View style={styles.statusTag}>
                <Text style={[styles.statusText, styles.fontRegular]}>{emergency.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.fixedBottom}>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#0c182bff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    marginTop: 200,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  profileDetails: {
    gap: 4,
  },
  profileName: {
    fontSize: 18,
    color: "#fff",
  },
  profileId: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.12)",
    padding: 4,
    borderRadius: 999,
    alignSelf: "flex-start",
    gap: 8,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  activeTabButton: {
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 13,
    color: "#E5E7EB",
  },
  activeTabText: {
    color: "#09111E",
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },
  recordButton: {
    backgroundColor: "#09111E",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  recordButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  emergencyCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  emergencyLeft: {
    flex: 1,
  },
  emergencyDate: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },
  emergencyDescription: {
    fontSize: 15,
    color: "#09111E",
  },
  statusTag: {
    backgroundColor: "#09111E",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    elevation: 12,
    shadowColor: "#0E1A2A",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  fontRegular: {
    fontFamily: "Poppins_400Regular",
  },
  fontBold: {
    fontFamily: "Poppins_700Bold",
  },
});

export default EmergencyScreen;
