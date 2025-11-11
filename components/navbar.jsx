import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

export default function BottomNav() {
  const [active, setActive] = useState("home");
   const navigation = useNavigation();
   const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const handlePress = (screenName) => {
    setActive(screenName);
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
  onPress={() =>{ setActive("home");
              handlePress("home")}
  }
  style={[styles.navItem, active === "home" && styles.activeNavItem]}
>
  <Image source={require("../assets/images/Home.png")} style={[
    styles.icon,
    { tintColor: active === "home" ? "#fff" : "#09111E" }, // dynamic tint
  ]} />
  <Text style={[styles.label, active === "home" && styles.activeLabel]}>
    Home
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {setActive("search");
                 handlePress("search")

  }
}
  style={[styles.navItem, active === "search" && styles.activeNavItem]}
>
  <Image source={require("../assets/images/data.png")} style={[
    styles.icon,
    { tintColor: active === "search" ? "#fff" : "#09111E" }, // dynamic tint
  ]} />
  <Text style={[styles.label, active === "search" && styles.activeLabel]}>
    Search
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {setActive("add");
                handlePress("appointments");
  }}
  style={[styles.navItem, active === "add" && styles.activeNavItem]}
>
  <Image source={require("../assets/images/appoint.png")} style={[
    styles.icon,
    { tintColor: active === "add" ? "#fff" : "#09111E" }, // dynamic tint
  ]} />
  <Text style={[styles.label, active === "add" && styles.activeLabel]}>
    Appointments
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {setActive("notifications");
                 handlePress("notifications");
  }}
  style={[styles.navItem, active === "notifications" && styles.activeNavItem]}
>
  <Image source={require("../assets/images/notify.png")} style={[
    styles.icon,
    { tintColor: active === "notifications" ? "#fff" : "#09111E" }, // dynamic tint
  ]} />
  <Text
    style={[styles.label, active === "notifications" && styles.activeLabel]}
  >
    Alerts
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {setActive("profile");
                 handlePress("settings");
  }}
  style={[styles.navItem, active === "profile" && styles.activeNavItem]}
>
  <Image source={require("../assets/images/settings.png")} style={[
    styles.icon,
    { tintColor: active === "profile" ? "#fff" : "#09111E" }, // dynamic tint
  ]}/>
  <Text style={[styles.label, active === "profile" && styles.activeLabel]}>
    Profile
  </Text>
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
  backgroundColor: "#fff", // normal background
},

activeNavItem: {
  backgroundColor: "#09111E", // <-- active background
},

label: {
  color: "#09111E",
  fontSize: 12,
  marginTop: 4,
  fontFamily: "Poppins_400Regular",
},

activeLabel: {
  color: "#fff", // <-- change text color when active
},
});
