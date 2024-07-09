import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SyncNotesAppOnboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.syncNotesAppOnboarding, styles.iconLayout]}>
      <View style={styles.navParent}>
        <View style={styles.nav}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-24.png")}
            />
            <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
          </View>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/whmcs.png")}
            />
          </Pressable>
        </View>
        <View style={styles.introductionParent}>
          <View style={styles.introduction}>
            <Text style={[styles.welcome, styles.lashyFlexBox]}>Welcome!</Text>
            <Text
              style={[styles.syncYourNotebook, styles.lashyFlexBox]}
            >{`Sync your notebook
on Flashy`}</Text>
          </View>
          <View style={[styles.yesParent, styles.lashyFlexBox]}>
            <Pressable
              style={styles.yesLayout}
              onPress={() => navigation.navigate("Upload")}
            >
              <Text style={styles.yes1}>YES</Text>
            </Pressable>
            <Pressable
              style={[styles.later, styles.yesLayout]}
              onPress={() => navigation.navigate("Homepage")}
            >
              <Text style={styles.yes1}>LATER</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  yesLayout: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xs,
    height: 49,
    width: 116,
    backgroundColor: Color.gREEN,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    width: 70,
    height: 23,
    marginLeft: -15,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  welcome: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },
  syncYourNotebook: {
    fontSize: FontSize.size_13xl,
    height: 100,
    marginTop: 26,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignSelf: "stretch",
  },
  introduction: {
    alignSelf: "stretch",
  },
  yes1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
    textAlign: "center",
  },
  later: {
    marginLeft: 100,
  },
  yesParent: {
    marginTop: 41,
    flexDirection: "row",
  },
  introductionParent: {
    marginTop: 224,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    position: "absolute",
    marginLeft: -166,
    top: 23,
    left: "50%",
    alignItems: "center",
  },
  syncNotesAppOnboarding: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
  },
});

export default SyncNotesAppOnboarding;