import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Upload = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.upload, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.flashylogo}>
              <View style={[styles.groupParent, styles.navFlexBox]}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-23.png")}
                />
                <Text style={styles.lashy}>LASHY</Text>
              </View>
            </View>
            <Pressable
              style={styles.frameChild}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/settingsbtn5.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.uplodcontainerWrapper}>
              <View
                style={[styles.uplodcontainer, styles.uplodcontainerLayout]}
              >
                <View style={[styles.uploadbtn, styles.uploadspaceBorder]}>
                  <Text style={styles.upload1}>{`upload `}</Text>
                  <Image
                    style={styles.uploadIcon}
                    resizeMode="cover"
                    source={require("../assets/upload1.png")}
                  />
                </View>
                <View
                  style={[styles.uploadspaceParent, styles.uploadspaceBorder]}
                >
                  <View
                    style={[styles.uploadspace, styles.uploadspaceBorder]}
                  />
                  <View style={[styles.submitbtn, styles.submitbtnLayout]}>
                    <Text style={[styles.submit, styles.submitTypo]}>
                      Submit
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.uplodcontainerLayout]}>
              <View style={styles.coursenameParent}>
                <View style={[styles.coursename, styles.describeBorder]}>
                  <Text
                    style={[styles.courseName, styles.submitTypo]}
                  >{`course name `}</Text>
                </View>
                <View style={[styles.describe, styles.describeBorder]}>
                  <Text style={[styles.courseName, styles.submitTypo]}>
                    description(optional)
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.createbtn, styles.submitbtnLayout]}
                onPress={() => navigation.navigate("NewCard3")}
              >
                <Text style={[styles.submit, styles.submitTypo]}>Create</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.footerbar, styles.navFlexBox]}>
          <Pressable
            style={styles.createcardbtn}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus4.png")}
            />
            <Text style={styles.create1Typo}>Create</Text>
          </Pressable>
          <Pressable
            style={[styles.homebtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home4.png")}
            />
            <Text style={styles.create1Typo}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.librarybtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Library")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader3.png")}
            />
            <Text style={[styles.library, styles.create1Typo]}>Library</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  uplodcontainerLayout: {
    width: 350,
    alignItems: "center",
  },
  uploadspaceBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
  },
  submitbtnLayout: {
    padding: Padding.p_2xs,
    height: 49,
    width: 122,
    backgroundColor: Color.gREEN,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  submitTypo: {
    fontSize: FontSize.size_base,
    color: Color.bLACK,
    textAlign: "center",
  },
  describeBorder: {
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_31xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  create1Typo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    width: 70,
    height: 23,
    marginLeft: -15,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  flashylogo: {
    height: 40,
    width: 95,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  upload1: {
    fontSize: 15,
    width: 68,
    height: 20,
    color: Color.bLACK,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  uploadIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  uploadbtn: {
    width: 114,
    paddingHorizontal: Padding.p_3xs,
    height: 50,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    alignItems: "center",
    backgroundColor: Color.colorGray_100,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  uploadspace: {
    borderStyle: "dashed",
    width: 318,
    height: 193,
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  submit: {
    fontFamily: FontFamily.interRegular,
  },
  submitbtn: {
    marginTop: 10,
  },
  uploadspaceParent: {
    height: 268,
    paddingHorizontal: Padding.p_6xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_6xs,
    marginTop: 10,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  uplodcontainer: {
    height: 328,
  },
  uplodcontainerWrapper: {
    height: 336,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseName: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  coursename: {
    width: 326,
    paddingHorizontal: Padding.p_8xl,
  },
  describe: {
    paddingHorizontal: Padding.p_mini,
    marginTop: 10,
    alignSelf: "stretch",
  },
  coursenameParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  createbtn: {
    marginTop: 50,
  },
  frameContainer: {
    marginTop: 26,
  },
  frameGroup: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    height: 631,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  createcardbtn: {
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },
  homebtn: {
    width: 97,
  },
  library: {
    marginTop: 2,
  },
  librarybtn: {
    width: 95,
  },
  footerbar: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 36,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: -175.5,
    top: 28,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  upload: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Upload;