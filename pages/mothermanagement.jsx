import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNav from "../components/navbar.jsx";

const MotherManagementScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  // Summary cards data
  const summaryCards = [
    { title: "Total mothers", count: "128", icon: "people-outline" },
    { title: "Pregnant", count: "514", icon: "person-outline" },
    { title: "Mothers", count: "8", icon: "people-circle-outline" },
  ];

  // Today's appointments data
  const appointments = [
    { name: "Uwase Claudine", detail: "Due 11:00 * Mukamira Sector" },
    { name: "Uwase Claudine", detail: "Due 11:00 * Mukamira Sector" },
    { name: "Uwase Claudine", detail: "Due 11:00 * Mukamira Sector" },
    { name: "Uwase Claudine", detail: "Due 11:00 * Mukamira Sector" },
    { name: "Uwase Claudine", detail: "Due 11:00 * Mukamira Sector" },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="menu" size={28} color="#fff" />
          <Text style={[styles.headerTitle, styles.fontBold]}>Mother management</Text>
          <View style={styles.notificationContainer}>
                      <TouchableOpacity
                           onPress={() => navigation.navigate("notifications")}
                            >
                           <Image
                                source={require("../assets/images/notii.png")}
                                style={styles.notificationImage}
                                   />
                               </TouchableOpacity>
                      <TouchableOpacity
                       onPress={() => navigation.navigate("profile")}
                       >
                     <Image
                        source={require("../assets/images/white.png")}
                          style={styles.notificationImage}
                      />
                     </TouchableOpacity>
                    </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#777" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="search for anything"
            placeholderTextColor="#777"
            style={[styles.searchInput, styles.fontRegular]}
          />
        </View>

        {/* Summary Cards */}
        <View style={styles.cardsContainer}>
          {summaryCards.map((card, index) => (
            <View key={index} style={styles.summaryCard}>
              <View style={styles.cardIcon}>
                <Ionicons name={card.icon} size={24} color="#09111E" />
              </View>
              <Text style={[styles.cardTitle, styles.fontRegular]}>{card.title}</Text>
              <Text style={[styles.cardCount, styles.fontBold]}>{card.count}</Text>
              <View style={styles.cardFooter}>
                <Ionicons name="stats-chart" size={12} color="#777" />
                <Text style={[styles.cardFooterText, styles.fontRegular]}>unknown</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Today's Appointment Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, styles.fontBold]}>Today's appointment</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAll, styles.fontRegular]}>see all</Text>
          </TouchableOpacity>
        </View>

        {appointments.map((appointment, index) => (
          <View key={index} style={styles.appointmentCard}>
            <View style={styles.appointmentInfo}>
              <Text style={[styles.appointmentName, styles.fontBold]}>
                {appointment.name}
              </Text>
              <Text style={[styles.appointmentDetail, styles.fontRegular]}>
                {appointment.detail}
              </Text>
            </View>
            <TouchableOpacity style={styles.ancButton}>
              <Text style={[styles.ancButtonText, styles.fontRegular]}>ANC</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Registered Mothers Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, styles.fontBold]}>Registered mothers</Text>
          <TouchableOpacity
            style={styles.addMothersButton}
            onPress={() => navigation.navigate("register1")}
          >
            <Text style={[styles.addMothersButtonText, styles.fontRegular]}>+ add mother</Text>
          </TouchableOpacity>
        </View>

        {/* Mother Card */}
        <View style={styles.motherCard}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.profileImage}
          />
          <View style={[styles.motherInfo,]}>
            <Text style={[styles.motherName, styles.fontBold]}>Nziza Ange</Text>
            <Text style={[styles.motherId, styles.fontRegular]}>ID: CL-076</Text>
            <Text style={[styles.motherDetail, styles.fontRegular]}>
              Stage: 6 months ( trimester 2)
            </Text>
            <Text style={[styles.motherDetail, styles.fontRegular]}>
              Health center: Mukamira Health center
            </Text>
            <Text style={[styles.motherDetail, styles.fontRegular]}>
              Location: Mukamira
            </Text>
            <View style={styles.motherButtons}>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={[styles.viewDetailsButtonText, styles.fontRegular]}>
                  View details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emergencyButton}>
                <Text style={[styles.emergencyButtonText, styles.fontRegular]}>
                  Record emergency
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  fontRegular: {
    fontFamily: "Poppins_400Regular",
  },
  fontBold: {
    fontFamily: "Poppins_700Bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#09111E",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
  },
  notificationContainer: {
    position: "relative",
    flexDirection:"row",
    gap:8,
    alignItems:"center"
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
    marginTop: 14,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F1F3F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    color: "#09111E",
    marginBottom: 4,
    textAlign: "center",
  },
  cardCount: {
    fontSize: 18,
    color: "#09111E",
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  cardFooterText: {
    fontSize: 10,
    color: "#777",
    marginLeft: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#09111E",
  },
  seeAll: {
    color: "#777",
    fontSize: 13,
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
    borderColor: "#E0E0E0",
  },
  appointmentInfo: {
    flex: 1,
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
  ancButton: {
    backgroundColor: "#09111E",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  ancButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  addMothersButton: {
    backgroundColor: "#09111E",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addMothersButtonText: {
    color: "#fff",
    fontSize: 13,
  },
  motherCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  motherInfo: {
    flex: 1,
  },
  motherName: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  motherId: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  motherDetail: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2,
  },
  motherButtons: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  viewDetailsButton: {
    flex: 1,
    backgroundColor: "#09111E",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  viewDetailsButtonText: {
    color: "#fff",
    fontSize: 13,
  },
  emergencyButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#09111E",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  emergencyButtonText: {
    color: "#09111E",
    fontSize: 13,
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
});

export default MotherManagementScreen;

