import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNav from "@/components/navbar";

const NotificationsScreen = () => {
  const [activeTab, setActiveTab] = useState("All");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  const tabs = ["All", "Missed", "Completed", "type", "date"];
  const notifications = [
    { name: "Uwase Claudine", detail: "Due: 12:00, Mbarara Sector", type: "All" },
    { name: "Mugisha Eric", detail: "Due: 10:30, Kigali Sector", type: "Missed" },
    { name: "Irakoze Ange", detail: "Due: 14:15, Gatsibo Sector", type: "Completed" },
    { name: "Iradukunda Alice", detail: "Due: 09:00, Nyamata Sector", type: "All" },
    { name: "Ndayambaje John", detail: "Due: 16:00, Kicukiro Sector", type: "Missed" },
     { name: "Iradukunda Alice", detail: "Due: 09:00, Nyamata Sector", type: "All" },
      { name: "Iradukunda Alice", detail: "Due: 09:00, Nyamata Sector", type: "All" },
      { name: "Mugisha Eric", detail: "Due: 10:30, Kigali Sector", type: "type" },
      { name: "Mugisha Eric", detail: "Due: 10:30, Kigali Sector", type: "date" },
      { name: "Mugisha Eric", detail: "Due: 10:30, Kigali Sector", type: "Missed" },
      { name: "Irakoze Ange", detail: "Due: 14:15, Gatsibo Sector", type: "date" },
      { name: "Irakoze Ange", detail: "Due: 14:15, Gatsibo Sector", type: "type" },
      { name: "Irakoze Ange", detail: "Due: 14:15, Gatsibo Sector", type: "type" },
  ];

  const filtered = activeTab === "All" ? notifications : notifications.filter(n => n.type === activeTab);

  return (
    <View style={styles.container}>
      {/* Title */}
     <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#777" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search for anything"
          placeholderTextColor="#777"
          style={[styles.searchInput, styles.fontRegular]}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabBtn,
              activeTab === tab && styles.activeTabBtn,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,{fontFamily:"Poppins_700Bold"},
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notification list */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filtered.map((item, i) => (
          <View key={i} style={styles.appointmentCard}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.appointmentName, styles.fontBold]}>
                {item.name}
              </Text>
              <Text style={[styles.appointmentDetail, styles.fontRegular]}>
                {item.detail}
              </Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={[styles.addBtnText, styles.fontRegular]}>Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.fixedBottom}>
            <BottomNav />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  fixedBottom: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderTopColor: "#ddd",
  elevation: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
},
  fontBold: {
    fontFamily: "Poppins_700Bold",
  },
  fontRegular: {
    fontFamily: "Poppins_400Regular",
  },
  headerTitle: {
    fontSize: 24,
    color: "#09111E",
    marginBottom: 20,
    textAlign: "left",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width:"100%",
  },
  tabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: "#E8E9EB",
  },
  activeTabBtn: {
    backgroundColor: "#09111E",
  },
  tabText: {
    color: "#09111E",
    fontSize: 14,
  },
  activeTabText: {
    color: "#fff",
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  appointmentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd6d6ff",
  },
  appointmentName: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  appointmentDetail: {
    fontSize: 14,
    color: "#555",
  },
  addBtn: {
    backgroundColor: "#09111E",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 14,
  },
  searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 12,
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderWidth: 1.5,
  borderColor: "#E0E0E0",
  marginBottom: 16,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 3,
  elevation: 2,
},
searchInput: {
  flex: 1,
  fontSize: 14,
  color: "#000",
},

});

export default NotificationsScreen;
