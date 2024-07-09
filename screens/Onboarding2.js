import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding1, styles.onboarding1Layout]}>
      <View style={styles.onboarding11}>
        <View style={styles.introTextAboveBodyCanBParent}>
          <Image
            style={[styles.introTextAboveBodyCanB, styles.onboarding1Layout]}
            resizeMode="cover"
            source={require("../assets/intro-text-above-body--can-be-slightly-bigger4-41.png")}
          />
          <Text style={styles.syncYourNotebook}>{`Sync your notebook
on Flashy`}</Text>
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-12.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
          </View>
          <View style={[styles.nextbtn, styles.parentFlexBox]}>
            <Pressable onPress={() => navigation.navigate("Onboarding")}>
              <Text style={styles.next1}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    height: 26,
    width: 24,
  },
  introTextAboveBodyCanB: {
    maxWidth: "100%",
    height: 284,
    alignSelf: "stretch",
  },
  syncYourNotebook: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    display: "flex",
    height: 100,
    marginTop: 50,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  introTextAboveBodyCanBParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameItem: {
    marginLeft: 10,
  },
  next1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
    textAlign: "center",
  },
  nextbtn: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginLeft: 129,
    justifyContent: "center",
  },
  frameParent: {
    marginTop: 36,
  },
  onboarding11: {
    position: "absolute",
    marginTop: -259,
    marginLeft: -172,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  onboarding1: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
  },
});

export default Onboarding2;
