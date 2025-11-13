import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

export default function BottomNav() {
  const [active, setActive] = useState("Home");
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  // Wait until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  const handlePress = (buttonName, screenName) => {
    setActive(buttonName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>

        {/* HOME */}
        <TouchableOpacity
          onPress={() => handlePress("Home", "Home")}
          style={[styles.navItem, active === "Home" && styles.activeNavItem]}
        >
          <Image
            source={require("../assets/images/Home.png")}
            style={[
              styles.icon,
              { tintColor: active === "Home" ? "#09111E" : "#09111E" },
            ]}
          />
          <Text style={[styles.label, active === "Home" && styles.activeLabel]}>
            Home
          </Text>
        </TouchableOpacity>

        {/* CHILD */}
        <TouchableOpacity
          onPress={() => handlePress("Child", "child")}
          style={[styles.navItem, active === "Child" && styles.activeNavItem]}
        >
          <Image
            source={require("../assets/images/child.png")}
            style={[
              styles.icon,
              { tintColor: active === "Child" ? "#09111E" : "#09111E" },
            ]}
          />
          <Text style={[styles.label, active === "Child" && styles.activeLabel]}>
            Child
          </Text>
        </TouchableOpacity>

        {/* APPOINTMENTS */}
        <TouchableOpacity
          onPress={() => handlePress("Appointments", "appointments")}
          style={[
            styles.navItem,
            active === "Appointments" && styles.activeNavItem,
          ]}
        >
          <Image
            source={require("../assets/images/appoint.png")}
            style={[
              styles.icon,
              { tintColor: active === "Appointments" ? "#09111E" : "#09111E" },
            ]}
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
          onPress={() => handlePress("Mother", "mother")}
          style={[styles.navItem, active === "Mother" && styles.activeNavItem]}
        >
          <Image
            source={require("../assets/images/mother.png")}
            style={[
              styles.icon,
              { tintColor: active === "Mother" ? "#09111E" : "#09111E" },
            ]}
          />
          <Text style={[styles.label, active === "Mother" && styles.activeLabel]}>
            Mother
          </Text>
        </TouchableOpacity>

        {/* ANALYTICS */}
        <TouchableOpacity
          onPress={() => handlePress("Analytics", "analytics")}
          style={[
            styles.navItem,
            active === "Analytics" && styles.activeNavItem,
          ]}
        >
          <Image
            source={require("../assets/images/chop.png")}
            style={[
              styles.icon,
              { tintColor: active === "Analytics" ? "#09111E": "#09111E" },
            ]}
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
  },
  activeLabel: {
    color: "#fff",
  },
});
