import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <View style={styles.container}>
      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setActive("home")} style={styles.navItem}>
          <Image source={require("../assets/images/Home.png")} style={styles.icon} />
          <Text style={[styles.label, active === "home" && styles.activeLabel]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive("search")} style={styles.navItem}>
          <Image source={require("../assets/images/data.png")} style={styles.icon} />
          <Text style={[styles.label, active === "search" && styles.activeLabel]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive("add")} style={styles.navItem}>
          <Image source={require("../assets/images/appoint.png")} style={styles.icon} />
          <Text style={[styles.label, active === "add" && styles.activeLabel]}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive("notifications")} style={styles.navItem}>
          <Image source={require("../assets/images/notify.png")} style={styles.icon} />
          <Text style={[styles.label, active === "notifications" && styles.activeLabel]}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive("profile")} style={styles.navItem}>
          <Image source={require("../assets/images/settings.png")} style={styles.icon} />
          <Text style={[styles.label, active === "profile" && styles.activeLabel]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // push navbar to bottom
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    elevation: 5, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    color: "#999",
  },
  activeLabel: {
    color: "#09111E",
    fontWeight: "bold",
  },
});
