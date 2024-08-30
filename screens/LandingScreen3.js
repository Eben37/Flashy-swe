import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LandingScreen3 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.onboarding3}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/untitled-design9-1.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{`Quiz yourself on Flashy`}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.paginationDots}>
            <Image
              style={styles.dot}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.dot, styles.inactiveDot]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.dot, styles.inactiveDot]}
              resizeMode="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.replace("HomeScreen")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
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
  onboarding3: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  titleText: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paginationDots: {
    flexDirection: "row",
  },
  dot: {
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
  nextButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: '#fff',
    textAlign: "center",
  },
});

export default LandingScreen3;
