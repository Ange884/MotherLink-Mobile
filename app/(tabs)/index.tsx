import { StyleSheet, View } from "react-native";
import LandingScreen from "../../pages/Landing"; // make sure path is correct

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LandingScreen />   {/* 👈 Display your landing page here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // make it fill the screen
  },
});
