// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "../../pages/Landing";
import LoginScreen from "../../pages/login"
import ForgotPasswordScreen from "../../pages/forgot-password";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
   const [fontsLoaded] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded) return null;

  // Set global font
  const customTextProps = { style: { fontFamily: 'Poppins_400Regular' } };
  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

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
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: "login" }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
