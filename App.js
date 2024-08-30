import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
  return (
      <NavigationContainer>
          <Stack.Navigator
          initialRouteName='LandingScreen1'
          screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadFreeScreen"
              component={UploadFreeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewPdfFreeScreen"
              component={PreviewPdfFreeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewTextFreeScreen"
              component={PreviewTextFreeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeneratedFlashcardsFree"
              component={GeneratedFlashcardsFree}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadScreen"
              component={UploadScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewTextScreen"
              component={PreviewTextScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewPdfScreen"
              component={PreviewPdfScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeneratedFlashcards"
              component={GeneratedFlashcards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewFlashcardsScreen"
              component={ViewFlashcardsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectCourseScreen"
              component={SelectCourseScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingScreen1"
              component={LandingScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingScreen2"
              component={LandingScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingScreen3"
              component={LandingScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PremiumScreen"
              component={PremiumScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutScreen"
              component={AboutScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App; 