import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const NewCourse = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCourse, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={styles.nav}>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-2.png")}
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
                source={require("../assets/settingsbtn2.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.createnewcourseParent}>
              <View style={styles.createnewcourse}>
                <Text style={[styles.newCourse1, styles.courseClr]}>{`NEW
COURSE`}</Text>
              </View>
              <View style={styles.coursenameParent}>
                <View style={[styles.coursename, styles.describeBorder]}>
                  <Text
                    style={[styles.courseName, styles.courseClr]}
                  >{`course name `}</Text>
                </View>
                <View style={[styles.describe, styles.describeBorder]}>
                  <Text style={[styles.courseName, styles.courseClr]}>
                    description(optional)
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.createbtn}
              onPress={() => navigation.navigate("NewCard3")}
            >
              <Text style={[styles.create, styles.courseClr]}>Create</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.footerbar, styles.lashyFlexBox]}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus7.png")}
            />
            <Text style={styles.create1}>Create</Text>
          </View>
          <Pressable
            style={[styles.homebtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home7.png")}
            />
            <Text style={styles.homeTypo}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.librarybtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Library")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader8.png")}
            />
            <Text style={[styles.library, styles.homeTypo]}>Library</Text>
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
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  courseClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  describeBorder: {
    paddingVertical: Padding.p_6xs,
    height: 60,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_31xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  homeTypo: {
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
    display: "flex",
    width: 70,
    height: 23,
    marginLeft: -15,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  newCourse1: {
    fontSize: FontSize.size_45xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    flex: 1,
  },
  createnewcourse: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_100,
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_68xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.bLACK,
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
    width: 350,
    marginTop: 45,
    alignItems: "center",
  },
  createnewcourseParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  create: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  createbtn: {
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 98,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  create1: {
    color: Color.gREEN,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  createcardbtn: {
    width: 89,
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
    marginTop: 35,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175.5,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  newCourse: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default NewCourse;