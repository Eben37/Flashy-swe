import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HelpDesk = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helpDesk, styles.iconLayout]}>
      <Pressable
        style={styles.settingsbtn}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/whmcs.png")}
        />
      </Pressable>
      <View style={styles.helpStatementWrapper}>
        <View style={styles.helpStatement}>
          <Text style={[styles.welcomeToThe, styles.footerbarFlexBox]}>
            Welcome to the Flashy Help Desk!
          </Text>
          <View style={[styles.helpStatementInner, styles.footerbarFlexBox]}>
            <View style={[styles.faqsParent, styles.footerbarFlexBox]}>
              <View style={styles.faqs}>
                <View style={styles.frameParent}>
                  <View style={styles.frameParent}>
                    <View style={styles.frameParent}>
                      <Text
                        style={[
                          styles.aboutFlashyFlashyContainer,
                          styles.containerFlexBox,
                        ]}
                      >
                        <Text>
                          <Text style={styles.aboutFlashy}>{`About Flashy: 

`}</Text>
                          <Text
                            style={[styles.flashyIsA, styles.flashyIsATypo]}
                          >
                            Flashy is a powerful mobile app designed to make
                            studying more efficient and collaborative. Whether
                            you're prepping for exams or sharing notes with
                            classmates, Flashy helps you create, organize, and
                            share flashcards easily.
                          </Text>
                        </Text>
                      </Text>
                      <Text
                        style={[
                          styles.featuresCreateFlashcardsQContainer,
                          styles.containerFlexBox,
                        ]}
                      >
                        <Text>
                          <Text style={styles.features}>{`Features:

`}</Text>
                          <Text
                            style={styles.createFlashcardsQuicklyTur}
                          >{`Create Flashcards: Quickly turn your notebook entries into digital flashcards. Add text, images, and even audio to enhance your study materials.
Organize Notebooks: Keep all your notes and flashcards neatly organized in one place. Use tags and folders to categorize your content for easy access.
Collaborate with Peers: Share your notebooks and flashcards with other students. Work together on projects, study groups, or just help each other out with tricky subjects.
Sync Across Devices: Access your flashcards and notes anytime, anywhere. Sync your data across multiple devices to ensure you never lose your important study materials.`}</Text>
                        </Text>
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.howToGetContainer,
                        styles.containerFlexBox,
                      ]}
                    >
                      <Text>
                        <Text style={styles.features}>
                          <Text style={styles.howToGet}>{`How to Get Started:
`}</Text>
                          <Text style={styles.blankLine}> </Text>
                        </Text>
                        <Text style={styles.createFlashcardsQuicklyTur}>
                          <Text style={styles.howToGet}>Download Flashy:</Text>
                          <Text style={styles.blankLine}>{` 
Get the app from the App Store or Google Play.
`}</Text>
                          <Text style={styles.howToGet}>Start Creating:</Text>
                          <Text style={styles.blankLine}>{` 
Begin adding your notes and turning them into flashcards.
`}</Text>
                          <Text style={styles.howToGet}>{`Share and Collaborate:
 `}</Text>
                          <Text style={styles.blankLine}>
                            Invite friends to join your study sessions and share
                            your notebooks.
                          </Text>
                        </Text>
                      </Text>
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.needAssistanceIfYou,
                      styles.contactinfoFlexBox,
                    ]}
                  >{`Need Assistance? If you have any questions or need help with the app, please reach out to our support team:
Email: support@flashyapp.com
Phone: +233-829-6141`}</Text>
                </View>
              </View>
              <Text
                style={[styles.contactinfo, styles.contactinfoFlexBox]}
              >{`We're here to help you make the most out of Flashy and ensure you have a seamless and productive study experience. 
Happy studying!`}</Text>
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
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  footerbarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
  },
  flashyIsATypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  contactinfoFlexBox: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  settingsbtn: {
    top: 28,
    right: 39,
    width: 40,
    height: 40,
    position: "absolute",
  },
  welcomeToThe: {
    width: 255,
    height: 49,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
  },
  aboutFlashy: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  flashyIsA: {
    fontSize: FontSize.size_base,
  },
  aboutFlashyFlashyContainer: {
    height: 222,
    alignSelf: "stretch",
    alignItems: "center",
  },
  features: {
    fontSize: FontSize.size_xl,
  },
  createFlashcardsQuicklyTur: {
    fontSize: FontSize.size_base,
  },
  featuresCreateFlashcardsQContainer: {
    height: 461,
    marginTop: 20,
    alignSelf: "stretch",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  howToGet: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  blankLine: {
    fontFamily: FontFamily.interRegular,
  },
  howToGetContainer: {
    height: 297,
    alignSelf: "stretch",
    alignItems: "center",
  },
  needAssistanceIfYou: {
    height: 169,
    marginTop: 10,
  },
  faqs: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  contactinfo: {
    height: 163,
    marginTop: 18,
  },
  faqsParent: {
    height: 1382,
    flex: 1,
  },
  helpStatementInner: {
    backgroundColor: "rgba(161, 161, 161, 0.1)",
    height: 1422,
    paddingHorizontal: 44,
    paddingVertical: 41,
    marginTop: 30,
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  helpStatement: {
    width: 351,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  helpStatementWrapper: {
    top: 77,
    left: 10,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
    marginLeft: -175,
    top: 1607,
    left: "50%",
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    width: 351,
    flexDirection: "row",
    position: "absolute",
  },
  helpDesk: {
    backgroundColor: Color.white,
    height: 1757,
    overflow: "hidden",
    flex: 1,
  },
});

export default HelpDesk;