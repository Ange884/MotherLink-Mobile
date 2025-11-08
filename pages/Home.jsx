import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import BottomNav from "../components/navbar.jsx";

export default function Home(){
  return(
    <View>
        <BottomNav/>
    </View>
  )
}