import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Library = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.library, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navFlexBox}>
          <View style={styles.navFlexBox}>
            <View style={[styles.nav, styles.navFlexBox]}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-24.png")}
                />
                <Text style={[styles.lashy, styles.courseFlexBox1]}>LASHY</Text>
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
            <View style={[styles.courseHeaderParent, styles.navFlexBox]}>
              <View style={[styles.courseHeader, styles.courseFlexBox1]}>
                <Text style={[styles.yourCourses, styles.courseFlexBox1]}>
                  Your courses
                </Text>
              </View>
              <View style={[styles.courses, styles.coursesFlexBox]}>
                <Pressable
                  style={styles.course1}
                  onPress={() => navigation.navigate("NewCard3")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Physiology
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.course2, styles.courseFlexBox]}
                  onPress={() => navigation.navigate("NewCard3")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Anatomy
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.course3, styles.courseFlexBox]}
                  onPress={() => navigation.navigate("NewCard3")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Ethics
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.createcourse, styles.courseFlexBox1]}
            onPress={() => navigation.navigate("NewCourse")}
          >
            <Text style={[styles.createACourse, styles.physiologyClr]}>
              Create a course
            </Text>
          </Pressable>
        </View>
        <View style={[styles.footerbar, styles.coursesFlexBox]}>
          <Pressable
            style={[styles.createcardbtn, styles.courseFlexBox1]}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={[styles.create, styles.createTypo]}>Create</Text>
          </Pressable>
          <Pressable
            style={[styles.homebtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={[styles.create, styles.createTypo]}>Home</Text>
          </Pressable>
          <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader5.png")}
            />
            <Text style={[styles.library1, styles.createTypo]}>Library</Text>
          </View>
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
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  coursesFlexBox: {
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  physiologyClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  courseFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  createTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    width: 70,
    height: 23,
    marginLeft: -15,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
  },
  yourCourses: {
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorDarkslategray,
    width: 335,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  courseHeader: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  physiology: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    fontSize: FontSize.size_5xl,
    color: Color.bLACK,
  },
  course1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  course2: {
    height: 42,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  course3: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    height: 43,
  },
  courses: {
    borderRadius: Border.br_xl,
    height: 201,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    marginTop: 5,
  },
  courseHeaderParent: {
    marginTop: 20,
  },
  createACourse: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 134,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  createcourse: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 153,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 251,
    flexDirection: "row",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  create: {
    color: Color.white,
  },
  createcardbtn: {
    width: 89,
  },
  homebtn: {
    width: 97,
  },
  library1: {
    color: Color.gREEN,
    marginTop: 2,
  },
  librarybtn: {
    width: 95,
  },
  footerbar: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 36,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -176,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  library: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Library;