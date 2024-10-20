import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import UploadFreeScreen from "./screens/UploadFreeScreen";
import PreviewPdfFreeScreen from "./screens/PreviewPdfFreeScreen";
import PreviewTextFreeScreen from "./screens/PreviewTextFreeScreen";
import GeneratedFlashcardsFree from "./screens/GeneratedFlashcardsFree";
import UploadScreen from "./screens/UploadScreen";
import PreviewTextScreen from "./screens/PreviewTextScreen";
import PreviewPdfScreen from "./screens/PreviewPdfScreen";
import GeneratedFlashcards from "./screens/GeneratedFlashcards";
import SelectCourseScreen from "./screens/SelectCourseScreen";
import ViewFlashcardsScreen from "./screens/ViewFlashcardsScreen";
import LandingScreen1 from "./screens/LandingScreen1";
import LandingScreen2 from "./screens/LandingScreen2";
import LandingScreen3 from "./screens/LandingScreen3";
import PremiumScreen from "./screens/PremiumScreen";
import AccountScreen from "./screens/AccountScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");
        if (hasLaunched === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Optionally show a loading screen here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? "LandingScreen1" : "HomeScreen"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="UploadFreeScreen" component={UploadFreeScreen} />
        <Stack.Screen name="PreviewPdfFreeScreen" component={PreviewPdfFreeScreen} />
        <Stack.Screen name="PreviewTextFreeScreen" component={PreviewTextFreeScreen} />
        <Stack.Screen name="GeneratedFlashcardsFree" component={GeneratedFlashcardsFree} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="PreviewTextScreen" component={PreviewTextScreen} />
        <Stack.Screen name="PreviewPdfScreen" component={PreviewPdfScreen} />
        <Stack.Screen name="GeneratedFlashcards" component={GeneratedFlashcards} />
        <Stack.Screen name="ViewFlashcardsScreen" component={ViewFlashcardsScreen} />
        <Stack.Screen name="SelectCourseScreen" component={SelectCourseScreen} />
        <Stack.Screen name="LandingScreen1" component={LandingScreen1} />
        <Stack.Screen name="LandingScreen2" component={LandingScreen2} />
        <Stack.Screen name="LandingScreen3" component={LandingScreen3} />
        <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
