import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function MotherCard() {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Uwimana Claudine</Text>
          <Text style={styles.ml}>ML- 002345</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Upcoming</Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailRow}>
        <FontAwesome5 name="stethoscope" size={16} color="#000" />
        <Text style={styles.detailText}>Antenatal Visit 3</Text>
      </View>

      <View style={styles.detailRow}>
        <Ionicons name="time-outline" size={16} color="#000" />
        <Text style={styles.detailText}>20 Oct 2025, 09:00 AM</Text>
      </View>

      <View style={styles.detailRow}>
        <Ionicons name="location-outline" size={16} color="#000" />
        <Text style={styles.detailText}>Mukamira Health Center</Text>
      </View>

      <View style={styles.detailRow}>
        <MaterialIcons name="pregnant-woman" size={16} color="#000" />
        <Text style={styles.detailText}>6 months pregnant</Text>
      </View>

      <View style={styles.detailRow}>
        <Ionicons name="call-outline" size={16} color="#000" />
        <Text style={styles.detailText}>+250 79XXXXXXXX</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact mother</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 280, // compact width
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  ml: {
    fontSize: 12,
    color: "#555",
  },
  statusContainer: {
    backgroundColor: "#0B1E45",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  status: {
    color: "#fff",
    fontSize: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#0B1E45",
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
