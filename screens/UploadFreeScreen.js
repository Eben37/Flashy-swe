import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const UploadFreeScreen = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFilePick = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({
                type: [
                    'application/pdf', 
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                ],
            });

            console.log('DocumentPicker Result:', result);

            if (result.assets && Array.isArray(result.assets) && result.assets.length > 0) {
                const file = result.assets[0];
                console.log('File selected:', file.name);
                setSelectedFile(file);
            } else if (result.canceled) {
                console.log('File selection canceled');
            } else {
                console.log('Unknown result type:', result);
                setErrorMessage('Unexpected result type');
                setModalVisible(true);        
            }
        } catch (error) {
            console.error('Error picking document:', error);
            setErrorMessage('There was an issue picking the file');
            setModalVisible(true);        
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            setErrorMessage('Please select a file first');
            setModalVisible(true);        
            return;
        }

        setLoading(true); // Start loading animation

        const formData = new FormData();
        formData.append('file', {
            uri: selectedFile.uri,
            name: selectedFile.name,
            type: selectedFile.mimeType,
        });

        try {
            const response = await axios.post(`${process.env.API_BACKEND}/preview_free_upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const { file_ext, images, pages } = response.data;

            setLoading(false); // Stop loading animation

            if (file_ext === 'pdf') {
                navigation.navigate('PreviewPdfFreeScreen', { images: images, fileType: 'pdf' });
            } else if (file_ext === 'docx' || file_ext === 'pptx') {
                navigation.navigate('PreviewTextFreeScreen', { pages: pages, fileType: file_ext });
            } else {
                setErrorMessage('Unsupported file type');
                setModalVisible(true);        
                console.log('Unsupported file type');
            }            
        } catch (error) {
            console.error('Upload Error:', error);
            setLoading(false); // Stop loading animation
            setErrorMessage('There was an issue uploading your file');
            setModalVisible(true);        
        }

        // clear selected file
        setSelectedFile('');
    };

    return (
        <>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/flashy-upload-logo.png')} // Replace with your logo path
                        style={styles.logo}
                    />
            </View>

            <Text style={styles.title}>Upload a Document</Text>
            <TouchableOpacity style={styles.button} onPress={handleFilePick}>
                <Icon name="attach-outline" size={24} color="#fff" />
                <Text style={styles.buttonText}>Choose File</Text>
            </TouchableOpacity>
            {selectedFile && (
                <View style={styles.uploadPreview}>
                    <Icon name="document-text-outline" size={24} color="#00796b" />
                    <Text style={styles.previewText}>
                        <Text style={styles.previewTextStrong}>Selected File: </Text>
                        {selectedFile.name}
                    </Text>
                </View>
            )}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}disabled={loading}>
                {loading ? (
                <View style={styles.buttonContent}>
                    <Text style={styles.submitButtonText}>Uploading...</Text>
                    <ActivityIndicator size="small" color="#fff" style={styles.activityIndicator} />
                </View>
                ) : (
                <Text style={styles.submitButtonText}>Upload</Text>
                )}
            </TouchableOpacity>

        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.navBar}>
        <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('HomeScreen')}
        >
            <Icon name="home-outline" size={24} color="#fff" />
            <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('UploadFreeScreen')}
        >
            <Icon name="add-circle" size={24} color="#fff" />
            <Text style={styles.navTextActive}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('PremiumScreen')}
        >
            <Icon name="albums-outline" size={24} color="#fff" />
            <Text style={styles.navText}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => navigation.navigate('PremiumScreen')}
        >
            <Icon name="star-outline" size={24} color="#fff" />
            <Text style={styles.navText}>Premium</Text>
        </TouchableOpacity>
        </View>

        {/* Modal for error display */}
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
        </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    logoContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    logo: {
        width: 45,
        height: 65,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00796b', // Teal color
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#00796b', // Teal color
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    uploadPreview: {
        marginTop: 20,
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    previewText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    previewTextStrong: {
        fontWeight: 'bold',
    },
    submitButton: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#00796b', // Teal color
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00796b', // Active color
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
        marginTop: 2,
    },
    navTextActive: {
        color: '#e0f7fa', // Active text color
        fontSize: 12,
        marginTop: 2,
        fontWeight: 'bold',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      activityIndicator: {
        marginLeft: 10,
      },
        modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00796b',
        borderRadius: 8,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default UploadFreeScreen;
