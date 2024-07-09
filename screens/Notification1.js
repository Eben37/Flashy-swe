import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.notificationIcon}
      resizeMode="cover"
      source={require("../assets/notification.png")}
    >
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.navParent}>
          <View style={styles.nav}>
            <View style={[styles.notificationWrapper, styles.footerbarFlexBox]}>
              <Text style={[styles.notification, styles.notificationTypo]}>
                notification
              </Text>
            </View>
            <View style={styles.settingsbtn}>
              <Pressable
                style={styles.whmcs}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={styles.widgetbtnIcon}
                  resizeMode="cover"
                  source={require("../assets/widgetbtn.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.noticecontainerWrapper}>
            <View style={styles.noticecontainer}>
              <View
                style={[
                  styles.notificationsHereWrapper,
                  styles.frameParentPosition,
                ]}
              >
                <Text
                  style={[styles.notificationsHere, styles.notificationTypo]}
                >
                  notifications here
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.footerbar, styles.footerbarFlexBox]}>
          <Pressable
            style={[styles.createcardbtn, styles.footerbarFlexBox]}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus5.png")}
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
              source={require("../assets/home5.png")}
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
              source={require("../assets/bookreader4.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    position: "absolute",
    alignItems: "center",
  },
  footerbarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  notificationTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    alignSelf: "stretch",
  },
  notification: {
    display: "flex",
    width: 148,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationWrapper: {
    width: 143,
    flexDirection: "row",
  },
  widgetbtnIcon: {
    width: 35,
    height: 35,
  },
  whmcs: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingHorizontal: 3,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  settingsbtn: {
    width: 61,
    padding: Padding.p_3xs,
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  notificationsHere: {
    fontSize: FontSize.size_base,
  },
  notificationsHereWrapper: {
    top: 10,
    left: 10,
    width: 320,
    height: 558,
    zIndex: 0,
    alignItems: "center",
  },
  noticecontainer: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 0.5,
    width: 340,
    height: 578,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  noticecontainerWrapper: {
    marginTop: 11,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    alignSelf: "stretch",
    alignItems: "center",
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
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: -400,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  notificationIcon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notification1;