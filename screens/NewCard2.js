import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NewCard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard3, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={styles.nav}>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-21.png")}
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
                source={require("../assets/settingsbtn1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.coursenameParent}>
              <View style={[styles.coursename, styles.card1Border]}>
                <Text style={styles.newCardClr}>
                  <Text
                    style={[styles.courseName, styles.cardsTypo]}
                  >{`course name
`}</Text>
                  <Text
                    style={[styles.descriptionOptional, styles.termNameTypo]}
                  >
                    description (optional)
                  </Text>
                </Text>
              </View>
              <View style={styles.cardcontainer}>
                <Text style={[styles.cards, styles.cardsFlexBox]}>CARDS</Text>
                <Pressable
                  style={styles.card1Wrapper}
                  onPress={() => navigation.navigate("Container")}
                >
                  <View style={[styles.card1, styles.card1FlexBox]}>
                    <Text style={[styles.termName, styles.cardsFlexBox]}>
                      term name
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <Pressable
              style={[styles.createbtn, styles.card1FlexBox]}
              onPress={() => navigation.navigate("NewCard")}
            >
              <Text style={[styles.newCard, styles.newCardClr]}>New Card</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.footerbar, styles.lashyFlexBox]}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus1.png")}
            />
            <Text style={styles.create}>Create</Text>
          </View>
          <View style={[styles.homebtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={styles.homeTypo}>Home</Text>
          </View>
          <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader1.png")}
            />
            <Text style={[styles.library, styles.homeTypo]}>Library</Text>
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
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  card1Border: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  cardsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
  },
  termNameTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  cardsFlexBox: {
    color: Color.colorDarkslategray,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  card1FlexBox: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  newCardClr: {
    color: Color.bLACK,
    textAlign: "center",
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
    width: 70,
    height: 23,
    marginLeft: -15,
    display: "flex",
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
  courseName: {
    fontWeight: "600",
  },
  descriptionOptional: {
    fontSize: FontSize.size_6xl,
  },
  coursename: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.color,
    height: 229,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 46,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cards: {
    height: 39,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
    alignSelf: "stretch",
  },
  termName: {
    fontSize: FontSize.size_xl,
    width: 295,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  card1: {
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
    height: 40,
  },
  card1Wrapper: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  cardcontainer: {
    height: 240,
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  coursenameParent: {
    height: 499,
    alignSelf: "stretch",
  },
  newCard: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  createbtn: {
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 5,
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
  create: {
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
    marginTop: 34,
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
  newCard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default NewCard2;
