import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SharePop = ({ onClose }) => {
  return (
    <View style={styles.sharepop}>
      <View style={styles.navParent}>
        <View style={[styles.nav, styles.navFlexBox]}>
          <View style={styles.logoParentFlexBox}>
            <Image
              style={styles.logoIcon}
              resizeMode="cover"
              source={require("../assets/logo.png")}
            />
            <Text style={[styles.lashy, styles.lashyTypo]}>LASHY</Text>
          </View>
          <Image
            style={styles.closebtnIcon}
            resizeMode="cover"
            source={require("../assets/closebtn.png")}
          />
        </View>
        <View style={[styles.shareThisCardWrapper, styles.shareCardLayout]}>
          <Text style={[styles.shareThisCard, styles.inviteTypo]}>
            share this card
          </Text>
        </View>
        <View style={styles.emailtextboxParent}>
          <View style={[styles.emailtextbox, styles.logoParentFlexBox]}>
            <Text style={[styles.typeYourEmail, styles.lashyTypo]}>
              type your email
            </Text>
          </View>
          <View style={styles.invitetextboxParent}>
            <View style={[styles.emailtextbox, styles.logoParentFlexBox]}>
              <Text style={[styles.typeYourEmail, styles.lashyTypo]}>
                invite by others by their email
              </Text>
            </View>
            <View style={[styles.inviteButton, styles.logoParentFlexBox]}>
              <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lashyTypo: {
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  shareCardLayout: {
    width: 103,
    alignItems: "center",
  },
  inviteTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  logoParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    width: 28,
    height: 23,
  },
  lashy: {
    fontSize: 12,
    textAlign: "right",
    width: 40,
    marginLeft: -5,
    color: Color.color,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 23,
    alignItems: "center",
  },
  closebtnIcon: {
    width: 20,
    height: 20,
  },
  nav: {
    width: 278,
    height: 25,
    alignItems: "center",
  },
  shareThisCard: {
    width: 103,
    alignItems: "center",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.color,
    justifyContent: "center",
  },
  shareThisCardWrapper: {
    marginTop: 22,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  typeYourEmail: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    width: 241,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  emailtextbox: {
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 35,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
  },
  invite: {
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
  },
  inviteButton: {
    backgroundColor: Color.gREEN,
    width: 67,
    height: 27,
    padding: Padding.p_2xs,
    marginTop: 7,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  invitetextboxParent: {
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
  },
  emailtextboxParent: {
    alignSelf: "stretch",
    marginTop: 22,
  },
  navParent: {
    width: 304,
    height: 247,
    alignItems: "center",
  },
  sharepop: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: 20,
    paddingTop: 33,
    paddingBottom: 35,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
});

export default SharePop;