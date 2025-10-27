// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "../../pages/Landing";
import ForgotPasswordScreen from "../../pages/forgot-password";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    // <NavigationContainer> {/* ⚠ This is essential */}
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: "Forgot Password" }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
