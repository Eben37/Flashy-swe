import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const NewCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParentFlexBox}>
          <View style={[styles.nav, styles.navParentFlexBox]}>
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
          <View style={[styles.createnewcourseParent, styles.navParentFlexBox]}>
            <Pressable
              style={[styles.createnewcourse, styles.footerbarFlexBox]}
              onPress={() => navigation.navigate("NewCourse")}
            >
              <Text style={[styles.newCourse, styles.courseTypo]}>{`NEW
COURSE`}</Text>
            </Pressable>
            <View style={styles.navParentFlexBox}>
              <View style={[styles.selectcourse, styles.lashyFlexBox]}>
                <Text style={[styles.selectACourse, styles.courseTypo]}>
                  SELECT A COURSE
                </Text>
              </View>
              <View style={[styles.coursesWrapper, styles.footerbarFlexBox]}>
                <View style={styles.courses}>
                  <Pressable
                    style={styles.course1}
                    onPress={() => navigation.navigate("NewCard3")}
                  >
                    <Text style={styles.physiology}>Physiology</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.course2, styles.courseFlexBox]}
                    onPress={() => navigation.navigate("NewCard3")}
                  >
                    <Text style={styles.physiology}>Anatomy</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.course3, styles.courseFlexBox]}
                    onPress={() => navigation.navigate("NewCard3")}
                  >
                    <Text style={styles.physiology}>Ethics</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.footerbar, styles.footerbarFlexBox]}>
          <Pressable
            style={[styles.createcardbtn, styles.lashyFlexBox]}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
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
            <Text style={styles.createTypo}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.librarybtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Library")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
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
  navParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerbarFlexBox: {
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseTypo: {
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
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
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
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
  newCourse: {
    fontSize: FontSize.size_45xl,
    color: Color.gREEN,
    flex: 1,
  },
  createnewcourse: {
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_33xl,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    flexDirection: "row",
  },
  selectACourse: {
    fontSize: FontSize.size_16xl,
    color: Color.colorDarkslategray,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  selectcourse: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  physiology: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.bLACK,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
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
    width: 318,
  },
  coursesWrapper: {
    height: 201,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    marginTop: 5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
  },
  createnewcourseParent: {
    marginTop: 40,
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
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
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 88,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -176,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  newCard: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default NewCard1;