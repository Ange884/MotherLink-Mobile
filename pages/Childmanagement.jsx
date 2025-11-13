import React , {useState}  from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  useNavigate,
  Modal,
} from "react-native";
import { BlurView } from "expo-blur";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNav from "../components/navbar.jsx";
import MotherCard from "@/subpages/Upcoming.jsx";

const ChildManagementScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [visibleForm, setVisibleForm] = useState(null);
      if (!fontsLoaded) return null;
      const closeModal = () => setVisibleForm(null);

  // Summary cards data
  const summaryCards = [
    {
      title: "Total children",
      count: "128",
      icon: "people-outline",
      change: "12% increase",
    },
    {
      title: "Infants",
      count: "514",
      icon: "person-outline",
      change: "9% increase",
    },
    {
      title: "Toddlers",
      count: "8",
      icon: "people-circle-outline",
      change: "1-5 years",
    },
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
          <Text style={[styles.headerTitle, styles.fontBold]}>Child management</Text>
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
          <Feather name="search" size={18} color="#1d1d1dff" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="search for anything"
            placeholderTextColor="#1d1d1dff"
            style={[styles.searchInput, styles.fontRegular]}
          />
        </View>

        {/* Summary Cards */}
        <View style={styles.cardsContainer}>
          {summaryCards.map((card, index) => (
            <View key={index} style={styles.summaryCard}>
              <View style={styles.cardIcon}>
                <Ionicons name={card.icon} size={22} color="#09111E" />
              </View>
              <Text style={[styles.cardTitle, styles.fontBold]}>{card.title}</Text>
              <Text style={[styles.cardCount, styles.fontBold]}>{card.count}</Text>
              <View style={styles.changeRow}>
                <Ionicons name="trending-up" size={14} color="#09111E" />
                <Text style={styles.changeText}>{card.change}</Text>
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
            <TouchableOpacity style={styles.ancButton} onPress={() => setVisibleForm("motherCard")}>
              <Text style={[styles.ancButtonText, styles.fontRegular]}>Vaccine</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Registered Mothers Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, styles.fontBold]}>Registered mothers</Text>
          <TouchableOpacity style={styles.addMothersButton} onPress={() => navigation.navigate("child1")}>
            <Text style={[styles.addMothersButtonText, styles.fontRegular]}>+ add Child</Text>
          </TouchableOpacity>
        </View>

        {/* Mother Card */}
        <View>
        <View style={styles.motherCard}>
          <Image
            source={require("../assets/images/mariza.png")}
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

          <View style={styles.motherCard}>
          <Image
            source={require("../assets/images/mariza.png")}
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
          

        </View>
      </ScrollView>

       <Modal transparent animationType="fade" visible={!!visibleForm} onRequestClose={closeModal}>
              <TouchableOpacity activeOpacity={1} style={styles.blurContainer} onPress={closeModal}>
                <BlurView intensity={20} tint="light" style={styles.fullBlurView}>
                  <TouchableOpacity activeOpacity={1} onPress={() => {}} style={styles.cardContainer}>
                    {visibleForm === "motherCard" && <MotherCard />}
                  </TouchableOpacity>
                </BlurView>
              </TouchableOpacity>
            </Modal>
            

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
  notificationDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF0000",
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
    borderRadius: 16,
    padding: 16,
    alignItems: "flex-start",
    gap: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 14,
    color: "#09111E",
  },
  cardCount: {
    fontSize: 22,
    color: "#09111E",
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  changeText: {
    fontSize: 12,
    color: "#4B5563",
    fontFamily: "Poppins_500Medium",
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
    color: "#242424ff",
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
    color: "#1f1f1fff",
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
    color: "#1f1f1fff",
    marginBottom: 4,
  },
  motherDetail: {
    fontSize: 13,
    color: "#1d1d1dff",
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
    justifyContent:"center",
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
  blurContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  fullBlurView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChildManagementScreen;

