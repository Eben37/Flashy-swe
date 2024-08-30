import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const SharePop = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sharepop, styles.sharepopFlexBox]}>
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
          <Pressable
            style={styles.closebtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              close="close"
              resizeMode="cover"
              source={require("../assets/closebtn.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.shareThisCardWrapper, styles.navFlexBox]}>
          <Text style={[styles.shareThisCard, styles.lashyTypo]}>
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
            <Pressable
              style={[styles.inviteButton, styles.logoParentFlexBox]}
              inv="Invite"
            >
              <Text style={styles.invite}>Invite</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sharepopFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  navFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 278,
    alignItems: "center",
  },
  lashyTypo: {
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
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
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  closebtn: {
    width: 20,
    height: 20,
  },
  nav: {
    height: 25,
  },
  shareThisCard: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.color,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 25,
    width: 278,
    justifyContent: "center",
  },
  shareThisCardWrapper: {
    marginTop: 18,
  },
  typeYourEmail: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    width: 241,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
    flexDirection: "row",
  },
  invite: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
    textAlign: "center",
  },
  inviteButton: {
    backgroundColor: Color.gREEN,
    width: 67,
    height: 27,
    padding: Padding.p_2xs,
    marginTop: 30,
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
    marginTop: 18,
  },
  navParent: {
    width: 304,
    height: 247,
    alignItems: "center",
  },
  sharepop: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_xl,
    paddingTop: 33,
    paddingBottom: 35,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default SharePop;