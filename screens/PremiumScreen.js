import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const PremiumScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground 
                source={require("../assets/pre-background.png")}
                style={styles.backgroundImage}
            >
                    <ScrollView 
                        contentContainerStyle={styles.scrollContainer} 
                        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator if desired
                    >
                        <View style={styles.container}>
                            <Text style={styles.title}>Go Premium!</Text>
                            <Text style={styles.paragraph}>
                                Join our premium users to unlock advanced features including:
                            </Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureItem}><Icon name="star" size={20} color="#00796b" /> Unlimited flashcards and quizzes</Text>
                                <Text style={styles.featureItem}><Icon name="cloud-download" size={20} color="#00796b" /> Offline access to flashcards</Text>
                                <Text style={styles.featureItem}><Icon name="documents" size={20} color="#00796b" /> Multi-file support</Text>
                                <Text style={styles.featureItem}><Icon name="color-palette" size={20} color="#00796b" /> Customization options for flashcards</Text>
                                <Text style={styles.featureItem}><Icon name="headset" size={20} color="#00796b" /> Priority support and updates</Text>
                            </View>
                            <Text style={styles.trialText}>The premium subscription comes with a two-week free trial.</Text>
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => navigation.navigate('RegisterScreen')}
                            >
                                <Text style={styles.buttonText}>Join Premium</Text>
                                <Text style={styles.buttonTextAmount}>(GHS 11.00)</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.loginLink} 
                                onPress={() => navigation.navigate('LoginScreen')}
                            >
                                <Text style={styles.loginLinkText}>Already a member? Log In</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.title}>Freemium</Text>
                            <Text style={styles.paragraph}>
                                Enjoy the essential features for free with our Freemium plan! You'll have access to a limited number of flashcards and multi-file support to help you get started on your learning journey.
                            </Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureItem}><Icon name="flash" size={20} color="#00796b" /> Limited flashcards</Text>
                                <Text style={styles.featureItem}><Icon name="documents-outline" size={20} color="#00796b" /> Multi-file support</Text>
                                <Text style={styles.featureItem}><Icon name="headset-outline" size={20} color="#00796b" /> Standard support and updates</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => navigation.navigate('UploadFreeScreen')}
                            >
                                <Text style={styles.buttonText}>Enjoy Freemium</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,
        marginHorizontal: 10,
    },
    container: {
        width: '100%',
        maxWidth: 600,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        color: '#555',
    },
    featuresList: {
        marginBottom: 30,
        alignItems: 'center',
    },
    featureItem: {
        fontSize: 16,
        color: '#444',
        marginBottom: 10,
    },
    trialText: {
        fontSize: 14,
        color: '#00796b',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#00796b',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonTextAmount: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginLink: {
        marginTop: 20,
    },
    loginLinkText: {
        color: '#00796b',
        fontSize: 16,
    },
});

export default PremiumScreen;
