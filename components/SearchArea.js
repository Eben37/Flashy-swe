import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const SearchArea = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchcoursesParent}>
      <View style={styles.searchcourses}>
        <View style={styles.searchParent}>
          <Text style={[styles.search, styles.searchTypo]}>search</Text>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
        </View>
      </View>
      <View style={styles.recentlyViewedParent}>
        <Text style={[styles.recentlyViewed, styles.coursesFlexBox]}>
          recently viewed
        </Text>
        <View style={[styles.courses, styles.coursesFlexBox]}>
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
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  coursesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  courseFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "stretch",
  },
  search: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 260,
    height: 25,
    color: Color.bLACK,
    alignItems: "center",
  },
  searchIcon: {
    width: 25,
    marginLeft: 10,
    height: 25,
  },
  searchParent: {
    width: 296,
    flexDirection: "row",
    alignItems: "center",
  },
  searchcourses: {
    borderRadius: Border.br_31xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 326,
    height: 46,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.white,
  },
  recentlyViewed: {
    fontSize: FontSize.size_6xl,
    color: Color.gREEN,
    width: 319,
    height: 32,
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  physiology: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "center",
    color: Color.bLACK,
  },
  course1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "stretch",
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
    height: 158,
    marginTop: 50,
    alignSelf: "stretch",
  },
  recentlyViewedParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    height: 290,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_mini,
    marginTop: 23,
    alignSelf: "stretch",
  },
  searchcoursesParent: {
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SearchArea;