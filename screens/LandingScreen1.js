import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LandingScreen1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.onboarding1}>
      <View style={styles.introContainer}>
        <Image
          style={styles.introImage}
          resizeMode="contain"
          source={require("../assets/intro-text-above-body--can-be-slightly-bigger4-41.png")}
        />
        <Text style={styles.syncYourNotebook}>{`Sync your notebook on Flashy`}</Text>
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          <Image
            style={styles.paginationDot}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.paginationDot, styles.inactiveDot]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.paginationDot, styles.inactiveDot]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("LandingScreen2")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  onboarding1: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  introContainer: {
    alignItems: "center",
    width: "100%",
  },
  introImage: {
    width: "100%",
    height: 250,
  },
  syncYourNotebook: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 20,
  },
  paginationContainer: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paginationDots: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationDot: {
    width: 24,
    height: 24,
  },
  inactiveDot: {
    marginLeft: 10,
  },
  nextButton: {
    borderRadius: Border.br_31xl,
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  nextText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: '#fff',
    textAlign: "center",
  },
});

export default LandingScreen1;
