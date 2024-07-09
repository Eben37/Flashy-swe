import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SharePop from "../components/SharePop";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Container = () => {
  const [shareBtnContainerVisible, setShareBtnContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openShareBtnContainer = useCallback(() => {
    setShareBtnContainerVisible(true);
  }, []);

  const closeShareBtnContainer = useCallback(() => {
    setShareBtnContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.container, styles.iconLayout]}>
        <View style={styles.frameParent}>
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
            <View style={styles.cardnameParent}>
              <View style={styles.groupParent}>
                <View style={[styles.termNameWrapper, styles.sharebtnBorder]}>
                  <Text style={[styles.termName, styles.shareFlexBox]}>
                    term name
                  </Text>
                </View>
                <Pressable
                  style={[styles.sharebtn, styles.sharebtnBorder]}
                  onPress={openShareBtnContainer}
                >
                  <Text style={[styles.share, styles.shareFlexBox]}>Share</Text>
                </Pressable>
              </View>
              <View style={styles.contentofcard}>
                <Text style={styles.notes}>content here</Text>
              </View>
            </View>
          </View>
          <View style={[styles.footerbar, styles.lashyFlexBox]}>
            <Pressable
              style={[styles.createcardbtn, styles.lashyFlexBox]}
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
              <Text style={[styles.library, styles.createTypo]}>Library</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={shareBtnContainerVisible}
      >
        <View style={styles.shareBtnContainerOverlay}>
          <Pressable
            style={styles.shareBtnContainerBg}
            onPress={closeShareBtnContainer}
          />
          <SharePop onClose={closeShareBtnContainer} />
        </View>
      </Modal>
    </>
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
  sharebtnBorder: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_8xl,
    height: 41,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  shareFlexBox: {
    color: Color.bLACK,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
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
    height: 23,
    marginLeft: -15,
    width: 70,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
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
  termName: {
    fontSize: FontSize.size_6xl,
    height: 40,
    flex: 1,
  },
  termNameWrapper: {
    backgroundColor: Color.colorGray_100,
    width: 196,
  },
  shareBtnContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  shareBtnContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  share: {
    fontSize: FontSize.size_xl,
    height: 27,
    width: 70,
  },
  sharebtn: {
    backgroundColor: Color.gREEN,
    width: 81,
    marginLeft: 7,
  },
  notes: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  contentofcard: {
    width: 288,
    height: 480,
    marginTop: 17,
    alignItems: "center",
  },
  cardnameParent: {
    height: 558,
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
  create: {
    color: Color.white,
  },
  createcardbtn: {
    width: 89,
  },
  homebtn: {
    width: 97,
  },
  library: {
    color: Color.gREEN,
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
    marginTop: 28,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  container: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Container;