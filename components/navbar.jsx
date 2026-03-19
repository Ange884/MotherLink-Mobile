import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function BottomNav() {
  const navigation = useNavigation();
  const routeName = useNavigationState((state) => {
    const route = state?.routes[state?.index];
    return route?.name;
  });

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  // Wait until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  // Map route names to button names
  const getActiveButton = () => {
    if (routeName === "Home") return "Home";
    if (routeName === "child") return "Child";
    if (routeName === "appointments") return "Appointments";
    if (routeName === "mother") return "Mother";
    if (routeName === "analytics") return "Analytics";
    return "Home"; // default
  };

  const active = getActiveButton();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>

        {/* HOME */}
        <TouchableOpacity
          onPress={() => handlePress("Home")}
          style={[styles.navItem, active === "Home" && styles.activeNavItem]}
        >
          <Ionicons
            name={active === "Home" ? "home" : "home-outline"}
            size={24}
            color={active === "Home" ? "#055a8bff" : "#09111E"}
          />
          <Text style={[styles.label, active === "Home" && styles.activeLabel]}>
            Home
          </Text>
        </TouchableOpacity>

        {/* CHILD */}
        <TouchableOpacity
          onPress={() => handlePress("child")}
          style={[styles.navItem, active === "Child" && styles.activeNavItem]}
        >
          <Ionicons
            name={active === "Child" ? "people" : "people-outline"}
            size={24}
            color={active === "Child" ? "#055a8bff" : "#09111E"}
          />
          <Text style={[styles.label, active === "Child" && styles.activeLabel]}>
            Child
          </Text>
        </TouchableOpacity>

        {/* APPOINTMENTS */}
        <TouchableOpacity
          onPress={() => handlePress("appointments")}
          style={[
            styles.navItem,
            active === "Appointments" && styles.activeNavItem,
          ]}
        >
          <Ionicons
            name={active === "Appointments" ? "calendar" : "calendar-outline"}
            size={24}
            color={active === "Appointments" ? "#055a8bff" : "#09111E"}
          />
          <Text
            style={[
              styles.label,
              active === "Appointments" && styles.activeLabel,
            ]}
          >
            Appointments
          </Text>
        </TouchableOpacity>

        {/* MOTHER */}
        <TouchableOpacity
          onPress={() => handlePress("mother")}
          style={[styles.navItem, active === "Mother" && styles.activeNavItem]}
        >
          <Ionicons
            name={active === "Mother" ? "person" : "person-outline"}
            size={24}
            color={active === "Mother" ? "#055a8bff" : "#09111E"}
          />
          <Text style={[styles.label, active === "Mother" && styles.activeLabel]}>
            Mother
          </Text>
        </TouchableOpacity>

        {/* ANALYTICS */}
        <TouchableOpacity
          onPress={() => handlePress("analytics")}
          style={[
            styles.navItem,
            active === "Analytics" && styles.activeNavItem,
          ]}
        >
          <Ionicons
            name={active === "Analytics" ? "pie-chart" : "pie-chart-outline"}
            size={24}
            color={active === "Analytics" ? "#055a8bff" : "#09111E"}
          />
          <Text
            style={[styles.label, active === "Analytics" && styles.activeLabel]}
          >
            Analytics
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  label: {
    color: "#09111E",
    fontSize: 12,
    marginTop: 4,
    fontFamily: "Poppins_400Regular",
    fontWeight:500,
  },
  activeLabel: {
    color: "#055a8bff",
    fontWeight:900,
  },
});
