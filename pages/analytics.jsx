import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Ionicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import BottomNav from "@/components/navbar";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";

const screenWidth = Dimensions.get("window").width;

const chartData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    { data: [180, 220, 160, 200, 180, 160, 140], color: () => "#4F46E5", strokeWidth: 2 },
    { data: [120, 160, 200, 180, 160, 140, 120], color: () => "#06B6D4", strokeWidth: 2 },
    { data: [80, 100, 140, 120, 100, 80, 60], color: () => "#F59E0B", strokeWidth: 2 },
  ],
  legend: ["Value 1", "Value 2", "Value 3"],
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const AnalyticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("DAY");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  // Animation helper
  const scaleValue = new Animated.Value(1);
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Period Selector */}
        <View style={styles.periodContainer}>
          {["DAY", "WEEK", "MONTH", "YEAR"].map((period) => (
            <AnimatedTouchable
              key={period}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => setSelectedPeriod(period)}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive,
                { transform: [{ scale: scaleValue }] },
              ]}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.periodTextActive,
                  { fontFamily: selectedPeriod === period ? "Poppins_700Bold" : "Poppins_500Medium" },
                ]}
              >
                {period}
              </Text>
            </AnimatedTouchable>
          ))}
        </View>

        {/* Chart Section */}
        <Text style={[styles.sectionTitle, { fontFamily: "Poppins_700Bold" }]}>Antenatal appointments</Text>
        <View style={styles.chartCard}>
          <LineChart
            data={chartData}
            width={screenWidth - 32}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              labelColor: (opacity = 1) => `rgba(100,100,100,${opacity})`,
              propsForDots: { r: "0" },
              propsForBackgroundLines: { stroke: "#eee" },
            }}
            withShadow={false}
            bezier
            style={{ borderRadius: 16 }}
          />
        </View>

        {/* Attendance Overview */}
        <Text style={[styles.sectionTitle, { fontFamily: "Poppins_700Bold" }]}>Attendance overview</Text>
        <View style={styles.grid3}>
          {[
            { label: "First mothers", value: 567 },
            { label: "Third children", value: 400 },
            { label: "ANC one time", value: 100 },
          ].map((item, index) => (
            <AnimatedTouchable
              key={index}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={[styles.card, { transform: [{ scale: scaleValue }] }]}
            >
              <Text style={[styles.cardLabel, { fontFamily: "Poppins_500Medium" }]}>{item.label}</Text>
              <Text style={[styles.cardValue, { fontFamily: "Poppins_700Bold" }]}>{item.value}</Text>
            </AnimatedTouchable>
          ))}
        </View>

        {/* Emergency Overview */}
        <Text style={[styles.sectionTitle, { fontFamily: "Poppins_700Bold" }]}>Emergency overview</Text>
        <View style={styles.grid2}>
          {[
            { label: "Total emergencies", value: "5%", icon: <Feather name="activity" size={18} color="#ef4444" />, bg: "#fee2e2" },
            { label: "Labor pain", value: "57%", icon: <AntDesign name="heart" size={18} color="#a855f7" />, bg: "#f3e8ff" },
            { label: "Child emergencies", value: "20", icon: <FontAwesome5 name="child" size={16} color="#3b82f6" />, bg: "#dbeafe" },
            { label: "Mother emergencies", value: "40", icon: <Feather name="activity" size={18} color="#06b6d4" />, bg: "#cffafe" },
          ].map((item, index) => (
            <AnimatedTouchable
              key={index}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={[styles.emergencyCard, { transform: [{ scale: scaleValue }] }]}
            >
              <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>{item.icon}</View>
              <Text style={[styles.emergencyValue, { fontFamily: "Poppins_700Bold" }]}>{item.value}</Text>
              <Text style={[styles.emergencyLabel, { fontFamily: "Poppins_500Medium" }]}>{item.label}</Text>
            </AnimatedTouchable>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.fixedBottom}>
        <BottomNav />
      </View>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  scroll: { paddingHorizontal: 16, paddingBottom: 100 },
  periodContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 16 },
  periodButton: { borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: "#E5E7EB" },
  periodButtonActive: { backgroundColor: "#09111E" },
  periodText: { fontSize: 12, color: "#6B7280" },
  periodTextActive: { color: "#fff" },
  chartCard: { backgroundColor: "#fff", borderRadius: 16, padding: 8, marginBottom: 24, elevation: 2 },
  sectionTitle: { fontSize: 14, color: "#111827", marginBottom: 8 },
  grid3: { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
  grid2: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 12, alignItems: "center", marginHorizontal: 4, elevation: 1 },
  cardLabel: { fontSize: 12, color: "#6B7280" },
  cardValue: { fontSize: 22, color: "#111827" },
  emergencyCard: { width: "48%", backgroundColor: "#fff", borderRadius: 12, padding: 12, marginBottom: 12, elevation: 1, alignItems: "center" },
  iconWrapper: { width: 40, height: 40, borderRadius: 8, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  emergencyValue: { fontSize: 24, color: "#111827" },
  emergencyLabel: { fontSize: 12, color: "#6B7280" },
  fixedBottom: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ddd", elevation: 10, shadowColor: "#000", shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.1, shadowRadius: 3 },
});
