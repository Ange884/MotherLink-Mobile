// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "../../pages/Landing";
import LoginScreen from "../../pages/login"
import VerifyScreen from "../../pages/Verify"
import ForgotPasswordScreen from "../../pages/forgot-password";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import Signup1screen from "../../pages/sign-up1.jsx";
import Signup2screen from "../../pages/sign-up2.jsx";
import Signup3screen from "../../pages/sign-up3.jsx";
import Home from "../../pages/Home.jsx"




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
          name="home" 
          component={Home} 
          options={{ title: "Home" }} 
        />
        <Stack.Screen 
          name="signup1" 
          component={Signup1screen} 
          options={{ title: "First-Signup" }} 
        />
        <Stack.Screen 
          name="signup2" 
          component={Signup2screen} 
          options={{ title: "second-Signup" }} 
        />
         <Stack.Screen 
          name="signup3" 
          component={Signup3screen} 
          options={{ title: "Third-Signup" }} 
        />
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: "login" }} 
        />
        <Stack.Screen 
          name="verify" 
          component={VerifyScreen} 
          options={{ title: "Verify OTP" }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
