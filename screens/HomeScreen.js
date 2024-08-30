import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <Image 
                            source={require('../assets/flashy-header-logo.png')} // Replace with your logo path
                            style={styles.logo}
                        />
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.title}>FLASHY</Text>
                            <Text style={styles.level}>Your Automated Flashcard Generator</Text>
                        </View>
                    </View>
                </View>

                {/* Categories (used as navigation) */}
                <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UploadFreeScreen')}>
                        <Icon name="add-circle-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>Generate</Text>
                        <Text style={styles.cardProgress}>Generate for free</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PremiumScreen')}>
                        <Icon name="albums-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>Flashcards</Text>
                        <Text style={styles.cardProgress}>View Flashcards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PremiumScreen')}>
                        <Icon name="star-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>Premium</Text>
                        <Text style={styles.cardProgress}>Enjoy Advance Features</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('LoginScreen')}>
                        <Icon name="person-circle-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>Login</Text>
                        <Text style={styles.cardProgress}>Premium User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Icon name="add-circle-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>Register</Text>
                        <Text style={styles.cardProgress}>Premium User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AboutScreen')}>
                        <Icon name="information-circle-outline" size={35} color="#00796b" />
                        <Text style={styles.cardText}>About</Text>
                        <Text style={styles.cardProgress}>What is Flashy</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#00796b',
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50, 
        marginRight: 10,
    },
    headerTextContainer: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
    },
    level: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        backgroundColor: '#e6ebea',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    cardText: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
        fontWeight: 'bold',
    },
    cardProgress: {
        fontSize: 14,
        color: '#00796b',
        marginTop: 5,
        textAlign: 'center',
    },
});

export default HomeScreen;
