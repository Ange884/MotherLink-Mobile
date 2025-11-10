import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import BottomNav from "../components/navbar.jsx";

import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="menu" size={28} color="#fff" />
          <Text style={styles.headerText}>Hi Bonnie!</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#777" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search for anything"
          placeholderTextColor="#777"
          style={styles.searchInput}
        />
      </View>

      {/* Week Calendar */}
      <View style={styles.calendar}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayBox,
              day === "Wed" && styles.activeDayBox, // active day
            ]}
          >
            <Text style={[styles.dayText, day === "Wed" && styles.activeDayText]}>
              {day}
            </Text>
            <Text style={[styles.dateText, day === "Wed" && styles.activeDateText]}>
              {6 + index}
            </Text>
          </View>
        ))}
      </View>

      {/* Overview Section */}
      <Text style={styles.sectionTitle}>Overview</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewCard}>
          <Ionicons name="home-outline" size={28} color="#09111E" />
          <Text style={styles.cardTitle}>Total Houses</Text>
          <Text style={styles.cardCount}>120</Text>
        </View>
        <View style={styles.overviewCard}>
          <Ionicons name="woman-outline" size={28} color="#09111E" />
          <Text style={styles.cardTitle}>Total Mothers</Text>
          <Text style={styles.cardCount}>534</Text>
        </View>
        <View style={styles.overviewCard}>
          <Ionicons name="body-outline" size={28} color="#09111E" />
          <Text style={styles.cardTitle}>Total Children</Text>
          <Text style={styles.cardCount}>620</Text>
        </View>
      </View>

      {/* Today's Appointment */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Appointment</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {[1, 2, 3].map((_, i) => (
        <View key={i} style={styles.appointmentCard}>
          <View>
            <Text style={styles.appointmentName}>Uwase Claudine</Text>
            <Text style={styles.appointmentDetail}>Due: 12:00, Mbarara Sector</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="walk-outline" size={28} color="#09111E" />
          <Text style={styles.actionText}>Start Home Visit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="home-outline" size={28} color="#09111E" />
          <Text style={styles.actionText}>Add House Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="id-card-outline" size={28} color="#09111E" />
          <Text style={styles.actionText}>VHWID</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="document-text-outline" size={28} color="#09111E" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#09111E",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600", marginLeft: 8 },
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    backgroundColor: "#f7f8fa",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  dayBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    paddingVertical: 6,
    borderRadius: 10,
  },
  activeDayBox: { backgroundColor: "#09111E" },
  dayText: { color: "#777", fontSize: 14 },
  activeDayText: { color: "#fff" },
  dateText: { color: "#000", fontWeight: "600", fontSize: 14 },
  activeDateText: { color: "#fff" },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 22,
    marginBottom: 8,
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
  cardCount: { fontSize: 16, fontWeight: "700", marginTop: 4, color: "#09111E" },
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
  appointmentName: { fontSize: 15, fontWeight: "600", color: "#09111E" },
  appointmentDetail: { color: "#777", fontSize: 13, marginTop: 2 },
  addBtn: {
    backgroundColor: "#09111E",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  addBtnText: { color: "#fff", fontSize: 13, fontWeight: "500" },
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
    fontWeight: "600",
    color: "#09111E",
    textAlign: "center",
    marginTop: 8,
  },
});

export default HomeScreen;
