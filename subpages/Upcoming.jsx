import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useNavigation } from "expo-router";

export default function MotherCard({ onClose }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
const navigation = useNavigation();
  if (!fontsLoaded) return null;

  return (
    <View style={styles.card}>
      {/* Close Icon */}
      {onClose && (
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClose}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={20} color="#09111E" />
        </TouchableOpacity>
      )}
      
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
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("profile")}>Contact mother</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16, // more padding for spacing
    paddingTop: 20, // extra top padding for close button
    elevation: 3,
    width: "100%", // full width
    position: "relative",
    borderRadius: 12,
    maxWidth: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    padding: 4,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12, // more space under header
    marginTop: 4,
    paddingRight: 8, // space for close button
  },
  name: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    marginBottom: 2,
  },
  ml: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#555",
  },
  statusContainer: {
    backgroundColor: "#09111E",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems:"center",
    justifyContent:"center",
  },
  status: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5, // more spacing between rows
    gap: 8,
  },
  detailText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#09111E",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16, // more space before button
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
});
