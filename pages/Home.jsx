import React from "react";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import BottomNav from "../components/navbar.jsx";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity,Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Wait for fonts to load
  }
return (
  <View style={styles.screen}>
    {/* Scrollable content */}
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="menu" size={28} color="#fff" />
          <Text style={[styles.headerText, styles.fontRegular]}>Hi Nziza!</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#777" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search for anything"
          placeholderTextColor="#777"
          style={[styles.searchInput, styles.fontRegular]}
        />
      </View>

      {/* Week Calendar */}
      <View style={styles.calendar}>
        <Text style={[styles.calendarHeader, styles.fontBold]}>August 2024</Text>
        <View style={styles.daysRow}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
            <View
              key={index}
              style={[
                styles.dayBox,
                day === "Wed" && styles.activeDayBox, // active day
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  styles.fontRegular,
                  day === "Wed" && styles.activeDayText,
                ]}
              >
                {day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  styles.fontBold,
                  day === "Wed" && styles.activeDateText,
                ]}
              >
                {6 + index}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Overview */}
      <Text style={[styles.sectionTitle, styles.fontBold]}>Overview</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewCard}>
          <Image source={require("../assets/images/Group1.png")} />
          <Text style={[styles.cardTitle, styles.fontBold]}>Total Houses</Text>
          <Text style={[styles.cardCount, styles.fontBold]}>120</Text>
        </View>
        <View style={styles.overviewCard}>
          <Image source={require("../assets/images/Group2.png")} />
          <Text style={[styles.cardTitle, styles.fontBold]}>Total Mothers</Text>
          <Text style={[styles.cardCount, styles.fontBold]}>534</Text>
        </View>
        <View style={styles.overviewCard}>
          <Image source={require("../assets/images/Group4.png")} />
          <Text style={[styles.cardTitle, styles.fontBold]}>Total Children</Text>
          <Text style={[styles.cardCount, styles.fontBold]}>620</Text>
        </View>
      </View>

      {/* Appointments */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, styles.fontBold]}>Today's Appointment</Text>
        <Text style={[styles.seeAll, styles.fontBold]}>See all</Text>
      </View>

      {[1, 2, 3].map((_, i) => (
        <View key={i} style={styles.appointmentCard}>
          <View>
            <Text style={[styles.appointmentName, styles.fontBold]}>Uwase Claudine</Text>
            <Text style={[styles.appointmentDetail, styles.fontRegular]}>
              Due: 12:00, Mbarara Sector
            </Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={[styles.addBtnText, styles.fontRegular]}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Quick Actions */}
      <Text style={[styles.sectionTitle, styles.fontBold]}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionCard}>
          <Image source={require("../assets/images/Vector1.png")} />
          <Text style={[styles.actionText, styles.fontRegular]}>Start Home Visit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Image source={require("../assets/images/house.png")} />
          <Text style={[styles.actionText, styles.fontRegular]}>Add House Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Image source={require("../assets/images/Vector.png")} />
          <Text style={[styles.actionText, styles.fontRegular]}>VHWID</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Image source={require("../assets/images/Group .png")} />
          <Text style={[styles.actionText, styles.fontRegular]}>Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    {/* Fixed Bottom Navigation */}
    <View style={styles.fixedBottom}>
      <BottomNav />
    </View>
  </View>
);

};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  screen: {
  flex: 1,
  backgroundColor: "#fff",
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


  fontRegular: { fontFamily: "Poppins_400Regular" },
  fontBold: { fontFamily: "Poppins_700Bold" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#09111E",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  headerText: { color: "#fff", fontSize: 18, marginLeft: 8 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f6",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 14,
  },
  searchInput: { flex: 1, height: 40, color: "#000" },
  calendar: {
  backgroundColor: "#f7f8fa",
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 10,
  marginTop: 18,
},

calendarHeader: {
  fontSize: 16,
  color: "#09111E",
  marginBottom: 10,
  marginLeft:10,
  textAlign: "left", // <-- makes it aligned neatly like a title
},

daysRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  height:"60px",
},

dayBox: {
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  paddingVertical: 6,
  borderRadius: 10,
  gap:6,
},

activeDayBox: {
  backgroundColor: "#09111E",
},

dayText: { color: "#777", fontSize: 14 },
activeDayText: { color: "#fff" },
dateText: { color: "#000", fontSize: 14, fontWeight: "600" },
activeDateText: { color: "#fff" },

  sectionTitle: {
    fontSize: 16,
    marginTop: 22,
    marginBottom: 8,
    marginLeft:10,
    color: "#09111E",
  },
  overviewContainer: { flexDirection: "row", justifyContent: "space-between" },
  overviewCard: {
    flex: 1,
    backgroundColor: "#f1f3f6",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
  cardTitle: { fontSize: 12, color: "#333", marginTop: 6 },
  cardCount: { fontSize: 16, marginTop: 4, color: "#09111E" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  seeAll: { color: "#777", fontSize: 13 },
  appointmentCard: {
    backgroundColor: "#f7f8fa",
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appointmentName: { fontSize: 15, color: "#09111E" },
  appointmentDetail: { color: "#777", fontSize: 13, marginTop: 2 },
  addBtn: {
    backgroundColor: "#09111E",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  addBtnText: { color: "#fff", fontSize: 13 },
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  actionCard: {
    backgroundColor: "#f1f3f6",
    borderRadius: 14,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 12,
  },
  actionText: {
    fontSize: 13,
    color: "#09111E",
    textAlign: "center",
    marginTop: 8,
  },
});

export default HomeScreen;
