import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Ionicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const chartData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [180, 220, 160, 200, 180, 160, 140],
      color: () => "#4F46E5", // purple
      strokeWidth: 2,
    },
    {
      data: [120, 160, 200, 180, 160, 140, 120],
      color: () => "#06B6D4", // cyan
      strokeWidth: 2,
    },
    {
      data: [80, 100, 140, 120, 100, 80, 60],
      color: () => "#F59E0B", // amber
      strokeWidth: 2,
    },
  ],
  legend: ["Value 1", "Value 2", "Value 3"],
};

const AnalyticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("DAY");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Analytics</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Period Selector */}
        <View style={styles.periodContainer}>
          {["DAY", "WEEK", "MONTH", "YEAR"].map((period) => (
            <TouchableOpacity
              key={period}
              onPress={() => setSelectedPeriod(period)}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.periodTextActive,
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart Section */}
        <Text style={styles.sectionTitle}>Antenatal appointments</Text>
        <View style={styles.chartCard}>
          <LineChart
            data={chartData}
            width={screenWidth - 32}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
              propsForDots: {
                r: "0",
              },
              propsForBackgroundLines: {
                stroke: "#eee",
              },
            }}
            withShadow={false}
            bezier
            style={{ borderRadius: 16 }}
          />
        </View>

        {/* Attendance Overview */}
        <Text style={styles.sectionTitle}>Attendance overview</Text>
        <View style={styles.grid3}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>First mothers</Text>
            <Text style={styles.cardValue}>567</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Third children</Text>
            <Text style={styles.cardValue}>400</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>ANC one time</Text>
            <Text style={styles.cardValue}>100</Text>
          </View>
        </View>

        {/* Emergency Overview */}
        <Text style={styles.sectionTitle}>Emergency overview</Text>
        <View style={styles.grid2}>
          <View style={styles.emergencyCard}>
            <View style={[styles.iconWrapper, { backgroundColor: "#fee2e2" }]}>
              <Feather name="activity" size={18} color="#ef4444" />
            </View>
            <Text style={styles.emergencyValue}>5%</Text>
            <Text style={styles.emergencyLabel}>Total emergencies</Text>
          </View>

          <View style={styles.emergencyCard}>
            <View style={[styles.iconWrapper, { backgroundColor: "#f3e8ff" }]}>
              <AntDesign name="heart" size={18} color="#a855f7" />
            </View>
            <Text style={styles.emergencyValue}>57%</Text>
            <Text style={styles.emergencyLabel}>Labor pain</Text>
          </View>

          <View style={styles.emergencyCard}>
            <View style={[styles.iconWrapper, { backgroundColor: "#dbeafe" }]}>
              <FontAwesome5 name="child" size={16} color="#3b82f6" />
            </View>
            <Text style={styles.emergencyValue}>20</Text>
            <Text style={styles.emergencyLabel}>Child emergencies</Text>
          </View>

          <View style={styles.emergencyCard}>
            <View style={[styles.iconWrapper, { backgroundColor: "#cffafe" }]}>
              <Feather name="activity" size={18} color="#06b6d4" />
            </View>
            <Text style={styles.emergencyValue}>40</Text>
            <Text style={styles.emergencyLabel}>Mother emergencies</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="activity" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="people-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="trending-up" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  periodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  periodButton: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#E5E7EB",
  },
  periodButtonActive: {
    backgroundColor: "#4F46E5",
  },
  periodText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
  periodTextActive: {
    color: "#fff",
  },
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    marginBottom: 24,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  grid3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  grid2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginHorizontal: 4,
    elevation: 1,
  },
  cardLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  emergencyCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  emergencyValue: {
    fontSize: 24,
    fontWeight: "700",
  },
  emergencyLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
