import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutScreen = () => {
    return (
        <>
            <ImageBackground 
                source={require("../assets/course-background.jpeg")} 
                style={styles.headerBackground}
            >
                <View style={styles.overlay}>
                    <Text style={styles.headerText}>About Flashy</Text>
                    <Text style={styles.subHeaderText}>Flashcard Generation App</Text>
                </View>
            </ImageBackground>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.shadowContainer}>
                    <Text style={styles.description}>
                        Flashy is an innovative flashcard generation app designed to help you quickly create and manage flashcards for various subjects and topics. Whether you are a student, teacher, or just someone looking to organize information, Flashy makes it easy to generate flashcards and quizzes to enhance your learning experience.
                    </Text>
                </View>
                
                {/* Features Section */}
                <View style={styles.shadowContainer}>
                    <Text style={styles.sectionHeader}>Features</Text>
                    <View style={styles.features}>
                        <View style={styles.featureItem}>
                            <Icon name="document-text-outline" size={24} color="#00796b" />
                            <Text style={styles.featureText}>Generate flashcards from documents</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Icon name="color-palette-outline" size={24} color="#00796b" />
                            <Text style={styles.featureText}>Customize flashcard content and appearance</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Icon name="school-outline" size={24} color="#00796b" />
                            <Text style={styles.featureText}>Create quizzes based on your flashcards</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Icon name="star-outline" size={24} color="#00796b" />
                            <Text style={styles.featureText}>Access premium features for advanced functionalities</Text>
                        </View>
                    </View>
                </View>

                {/* Team Section */}
                <View style={styles.shadowContainer}>
                    <Text style={styles.sectionHeader}>Meet the Team</Text>
                    <View style={styles.teamMember}>
                        <Icon name="person-circle-outline" size={24} color="#00796b" />
                        <Text style={styles.teamText}>The FlashyTeam</Text>
                    </View>
                    {/* <View style={styles.teamMember}>
                        <Icon name="person-circle-outline" size={24} color="#00796b" />
                        <Text style={styles.teamText}>[Your Name] - Product Manager</Text>
                    </View> */}
                </View>

                {/* Social Media Section */}
                <View style={styles.shadowContainer}>
                    <Text style={styles.sectionHeader}>Follow Us</Text>
                    <View style={styles.socialMediaIcons}>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Icon name="logo-twitter" size={24} color="#00796b" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Icon name="logo-facebook" size={24} color="#00796b" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Icon name="logo-linkedin" size={24} color="#00796b" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcon}>
                            <Icon name="logo-instagram" size={24} color="#00796b" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    headerBackground: {
        width: '100%',
        height: 200,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 24,
        color: '#fff',
        marginTop: 5,
    },
    scrollViewContent: {
        padding: 20,
    },
    shadowContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        lineHeight: 22,
        textAlign: 'justify',
    },
    sectionHeader: {
        fontSize: 22,
        color: '#00796b',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    features: {
        marginTop: 10,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    featureText: {
        fontSize: 16,
        color: '#00796b',
        marginLeft: 10,
    },
    teamMember: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    teamText: {
        fontSize: 16,
        color: '#00796b',
        marginLeft: 10,
    },
    socialMediaSection: {
        alignItems: 'center',
    },
    socialMediaIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 10,
    },
    socialIcon: {
        padding: 10,
    },
});

export default AboutScreen;
