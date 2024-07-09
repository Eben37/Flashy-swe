import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-23.png")}
              />
              <Text style={styles.lashy}>LASHY</Text>
            </View>
            <Pressable
              style={styles.frameChild}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/settingsbtn4.png")}
              />
            </Pressable>
          </View>
          <View style={styles.viewcoursesbtnParent}>
            <Pressable
              style={styles.uploadnotebtnLayout}
              onPress={() => navigation.navigate("Library")}
            >
              <View style={[styles.eyeParent, styles.parentLayout]}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/eye.png")}
                />
                <Text style={styles.viewCourses}>view courses</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.uploadnotebtn, styles.uploadnotebtnLayout]}
              onPress={() => navigation.navigate("Upload")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/upload.png")}
                />
                <Text style={styles.viewCourses}>{`sync
notebook`}</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.uploadnotebtn, styles.uploadnotebtnLayout]}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/bell.png")}
                />
                <Text style={styles.viewCourses}>{`notifications `}</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.uploadnotebtn, styles.uploadnotebtnLayout]}
              onPress={() => navigation.navigate("HelpDesk")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/handshelping.png")}
                />
                <Text style={styles.viewCourses}>help desk</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.footerbar}>
          <Pressable
            style={styles.createcardbtn}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus4.png")}
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
              source={require("../assets/home4.png")}
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
              source={require("../assets/bookreader3.png")}
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
  navFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentLayout: {
    width: 134,
    alignItems: "center",
  },
  uploadnotebtnLayout: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_6xs,
    height: 109,
    width: 148,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.white,
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  eyeIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  viewCourses: {
    fontSize: FontSize.size_base,
    color: Color.white,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  eyeParent: {
    justifyContent: "center",
  },
  uploadnotebtn: {
    marginTop: 30,
  },
  viewcoursesbtnParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    marginTop: 40,
    borderRadius: Border.br_xl,
    justifyContent: "center",
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
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 53,
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175.5,
    top: 27,
    left: "50%",
    alignItems: "center",
  },
  settings: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;