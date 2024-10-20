import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Dimensions, ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const SelectCourseScreen = ({ route }) => {
    const { courses = [], username } = route.params || {};
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [selectedCourse, setSelectedCourse] = useState('');

    const handleCourseSelect = async (course) => {
        setSelectedCourse(course);

        try {
            const response = await axios.post(`${process.env.API_BACKEND}/flashcards`, {
                selectedCourse: course,
                username
            });
            const { flashcards, quizzes } = response.data;
            navigation.navigate('ViewFlashcardsScreen', { flashcards: flashcards, quizCards: quizzes, selectedCourse: course });
        } catch (error) {
            console.error('Error fetching flashcards and quizzes:', error);
            setErrorMessage('There was an issue fetching the flashcards and quizzes.');
            setModalVisible(true);
        }
    };

    const renderCourseItem = ({ item }) => (
        <TouchableOpacity
            style={styles.courseButton}
            onPress={() => handleCourseSelect(item)}
        >
            <View style={styles.courseContent}>
                <Text style={styles.courseText}>{item}</Text>
                {/* Use icons to represent course progress */}
                <Icon name="checkmark-circle-outline" size={24} color="#fff" style={styles.courseIcon} />
            </View>
        </TouchableOpacity>
    );

    const handleViewAccount = async () => {
        try {
            const response = await axios.post(`${process.env.API_BACKEND}/userAccount`, {
                username
            });
            const { email, plan } = response.data;
            navigation.navigate('AccountScreen', { email: email, username: username, plan: plan });
        } catch (error) {
            setErrorMessage('Failed to display your courses. Please try again.');
            setModalVisible(true);
        }
    };

    const handleUpload = async () => {
        try {
            navigation.navigate('UploadScreen', { username })
        } catch (error) {
            setErrorMessage('Error occurred. Please try again.');
            setModalVisible(true);
        }
    };

    return (
        <>
            <ImageBackground 
                source={require("../assets/course-background.jpeg")} 
                style={styles.headerBackground}
            >
                <View style={styles.overlay}>
                    <Text style={styles.headerText}>COURSES</Text>
                    <Text style={styles.subHeaderText}>Select to view cards</Text>
                </View>
            </ImageBackground>

            <View style={styles.container}>
                <FlatList
                    data={courses}
                    renderItem={renderCourseItem}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.navBar}>
                {/* <TouchableOpacity 
                    style={styles.navItem} 
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Icon name="home-outline" size={24} color="#fff" />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity> */}
                <TouchableOpacity 
                    style={styles.navItem} 
                    onPress={handleUpload}
                >
                    <Icon name="add-circle-outline" size={24} color="#fff" />
                    <Text style={styles.navText}>Generate</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.navItem} 
                >
                    <Icon name="albums" size={24} color="#fff" />
                    <Text style={styles.navTextActive}>Flashcards</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.navItem} 
                    onPress={handleViewAccount}
                >
                    <Icon name="person-circle-outline" size={24} color="#fff" />
                    <Text style={styles.navText}>Account</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalMessage}>{errorMessage}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        fontSize: 18,
        color: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
        marginTop: -50,  // Adjust based on header overlay
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    courseButton: {
        backgroundColor: '#00899b',
        padding: 15,
        borderRadius: 15,
        marginVertical: 10,
        width: width - 40,
        alignItems: 'center',
    },
    courseContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    courseText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    courseIcon: {
        marginLeft: 10,
    },
    list: {
        paddingBottom: 20,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00796b',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
    },
    navTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    modalMessage: {
        fontSize: 15,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#00796b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default SelectCourseScreen;
