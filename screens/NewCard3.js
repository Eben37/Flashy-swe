import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NewCard3 = () => {
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
              <View style={[styles.createnewcourse, styles.card1FlexBox]}>
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
              <View style={styles.cardsParent}>
                <Text style={[styles.cards, styles.cardsFlexBox]}>CARDS</Text>
                <Pressable
                  style={[styles.card1, styles.card1FlexBox]}
                  onPress={() => navigation.navigate("Container")}
                >
                  <Text style={[styles.termName, styles.cardsFlexBox]}>
                    term name
                  </Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              style={[styles.createbtn, styles.lashyFlexBox]}
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
              source={require("../assets/plus7.png")}
            />
            <Text style={styles.create}>Create</Text>
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
  card1FlexBox: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
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
    justifyContent: "center",
    textAlign: "center",
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
  createnewcourse: {
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_68xl,
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_mini,
    marginTop: 10,
    height: 40,
  },
  cardsParent: {
    width: 350,
    marginTop: 45,
    alignItems: "center",
  },
  createnewcourseParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  newCard: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 99,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  createbtn: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 138,
    flexDirection: "row",
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
  newCard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default NewCard3;