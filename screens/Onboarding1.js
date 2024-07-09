import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding3}>
      <View style={styles.onboarding1}>
        <Image
          style={styles.untitledDesign91}
          resizeMode="cover"
          source={require("../assets/untitled-design9-1.png")}
        />
        <View
          style={[styles.syncYourNotebookOnFlashyWrapper, styles.syncFlexBox]}
        >
          <Text
            style={[styles.syncYourNotebook, styles.syncFlexBox]}
          >{`Sync your notebook
on Flashy`}</Text>
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <View style={[styles.nextbtn, styles.parentFlexBox]}>
            <Pressable
              onPress={() => navigation.navigate("SyncNotesAppOnboarding")}
            >
              <Text style={styles.next1}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  syncFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    height: 26,
    width: 24,
  },
  untitledDesign91: {
    width: 343,
    height: 321,
  },
  syncYourNotebook: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    display: "flex",
    height: 100,
    justifyContent: "center",
    textAlign: "center",
  },
  syncYourNotebookOnFlashyWrapper: {
    marginTop: 36,
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
  onboarding1: {
    position: "absolute",
    marginTop: -271,
    marginLeft: -172,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  onboarding3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboarding1;