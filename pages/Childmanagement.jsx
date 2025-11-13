import React , {useState, useEffect}  from "react";
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
  ActivityIndicator,
} from "react-native";
import { BlurView } from "expo-blur";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNav from "../components/navbar.jsx";
import MotherCard from "@/subpages/Upcoming.jsx";
import { childAPI, appointmentAPI } from "../services/api.js";

const ChildManagementScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [visibleForm, setVisibleForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [summaryCards, setSummaryCards] = useState([
    {
      title: "Total children",
      count: "0",
      icon: "people-outline",
      change: "0% increase",
    },
    {
      title: "Infants",
      count: "0",
      icon: "person-outline",
      change: "0% increase",
    },
    {
      title: "Toddlers",
      count: "0",
      icon: "people-circle-outline",
      change: "0-0 years",
    },
  ]);
  const [appointments, setAppointments] = useState([]);
  const [registeredChildren, setRegisteredChildren] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchChildData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      searchChildren();
    } else {
      fetchChildData();
    }
  }, [searchQuery]);

  const fetchChildData = async () => {
    try {
      setLoading(true);
      const [statsRes, appointmentsRes, childrenRes] = await Promise.all([
        childAPI.getChildStats(),
        appointmentAPI.getAppointmentsByStatus('today'),
        childAPI.getAllChildren({ limit: 10 }),
      ]);
      
      const stats = statsRes.data;
      setSummaryCards([
        {
          title: "Total children",
          count: stats.totalChildren?.toString() || "0",
          icon: "people-outline",
          change: `${stats.childrenIncrease || 0}% increase`,
        },
        {
          title: "Infants",
          count: stats.infants?.toString() || "0",
          icon: "person-outline",
          change: `${stats.infantsIncrease || 0}% increase`,
        },
        {
          title: "Toddlers",
          count: stats.toddlers?.toString() || "0",
          icon: "people-circle-outline",
          change: `${stats.toddlerAgeRange || '1-5 years'}`,
        },
      ]);
      
      setAppointments(appointmentsRes.data || []);
      setRegisteredChildren(childrenRes.data || []);
    } catch (error) {
      console.error('Error fetching child data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchChildren = async () => {
    try {
      const res = await childAPI.searchChildren(searchQuery);
      setRegisteredChildren(res.data || []);
    } catch (error) {
      console.error('Error searching children:', error);
    }
  };

  if (!fontsLoaded) return null;
  const closeModal = () => setVisibleForm(null);

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
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

<View style={styles.cardsContainer}>
  {loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color="#09111E" />
    </View>
  ) : (
    summaryCards.map((card, index) => (
      <View key={index} style={styles.summaryCard}>
        <View style={styles.cardIcon}>
          <Ionicons name={card.icon} size={22} color="#09111E" />
        </View>

        <Text style={[styles.cardTitle, styles.fontBold]}>
          {card.title}
        </Text>

        <View style={styles.changeRow}>
          <Text style={[styles.cardCount, styles.fontBold]}>
            {card.count}
          </Text>
          <Ionicons name="trending-up" size={14} color="#09111E" />
          <Text style={[styles.changeText, {fontFamily:"Poppins_400Regular"}]}>{card.change}</Text>
        </View>
      </View>
    ))
  )}
</View>

        {/* Today's Appointment Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, styles.fontBold]}>Today's appointment</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAll, styles.fontRegular]}>see all</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#09111E" />
          </View>
        ) : appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <View key={index} style={styles.appointmentCard}>
              <View style={styles.appointmentInfo}>
                <Text style={[styles.appointmentName, styles.fontBold]}>
                  {appointment.name || appointment.childName || 'N/A'}
                </Text>
                <Text style={[styles.appointmentDetail, styles.fontRegular]}>
                  Due {appointment.time || appointment.scheduledTime || 'N/A'} * {appointment.location || appointment.sector || 'N/A'}
                </Text>
              </View>
              <TouchableOpacity style={styles.ancButton} onPress={() => setVisibleForm("motherCard")}>
                <Text style={[styles.ancButtonText, styles.fontRegular]}>Vaccine</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={[styles.noDataText, styles.fontRegular]}>No appointments today</Text>
        )}

        {/* Registered Mothers Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, styles.fontBold]}>Registered mothers</Text>
          <TouchableOpacity style={styles.addMothersButton} onPress={() => navigation.navigate("child1")}>
            <Text style={[styles.addMothersButtonText, styles.fontRegular]}>+ add Child</Text>
          </TouchableOpacity>
        </View>

        {/* Child Cards */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#09111E" />
          </View>
        ) : registeredChildren.length > 0 ? (
          registeredChildren.map((child, index) => (
            <View key={index} style={styles.motherCard}>
              <Image
                source={require("../assets/images/mariza.png")}
                style={styles.profileImage}
              />
              <View style={[styles.motherInfo,]}>
                <Text style={[styles.motherName, styles.fontBold]}>{child.name || 'N/A'}</Text>
                <Text style={[styles.motherId, styles.fontRegular]}>ID: {child.id || child.childId || 'N/A'}</Text>
                <Text style={[styles.motherDetail, styles.fontRegular]}>
                  Age: {child.age || child.ageMonths || 'N/A'}
                </Text>
                <Text style={[styles.motherDetail, styles.fontRegular]}>
                  Health center: {child.healthCenter || 'N/A'}
                </Text>
                <Text style={[styles.motherDetail, styles.fontRegular]}>
                  Location: {child.location || 'N/A'}
                </Text>
                <View style={styles.motherButtons}>
                  <TouchableOpacity 
                    style={styles.viewDetailsButton}
                    onPress={() => navigation.navigate('childProfile', { childId: child.id })}
                  >
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
          ))
        ) : (
          <Text style={[styles.noDataText, styles.fontRegular]}>No registered children</Text>
        )}
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
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  summaryCard: {
    width: "33%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    justifyContent: "space-between", // ✅ pushes top content up & changeRow down
    height: 120, // optional fixed height for proper spacing
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardIcon: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 12,
    color: "#333",
    marginTop: 8,
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center", // ✅ keeps count, icon, text on same line
    gap: 5, // ✅ space between count, icon, and change text (RN ≥ 0.71)
  },
  cardCount: {
    fontSize: 10,
    color: "#09111E",
  },
  changeText: {
    fontSize: 9,
    color: "#000",
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
  loadingContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataText: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
    fontSize: 14,
  },
});

export default ChildManagementScreen;

