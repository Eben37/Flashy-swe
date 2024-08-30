import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, Modal, ActivityIndicator, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons


const CustomCheckbox = ({ value, onValueChange, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onValueChange}>
        <View style={[styles.checkbox, value && styles.checked]}>
            {value && <Text style={styles.checkMark}>✓</Text>}
        </View>
        {label && <Text style={styles.checkboxLabel}>{label}</Text>}
    </TouchableOpacity>
  );
  
  const QuizCustomCheckbox = ({ value, onValueChange, label }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => onValueChange(value === 'yes' ? 'no' : 'yes')} // Toggle between 'yes' and 'no'
    >
      <View style={[styles.checkbox, value === 'yes' && styles.checked]}>
        {value === 'yes' && <Text style={styles.checkMark}>✓</Text>}
      </View>
      {label && <Text style={styles.checkboxLabel}>{label}</Text>}
    </TouchableOpacity>
  );


const PreviewPdfScreen = ({ route }) => {
    const navigation = useNavigation();
    const { images, fileType, course, username } = route.params || {};
    const [selectedPages, setSelectedPages] = useState([]);
    const [flashcardNumber, setFlashcardNumber] = useState('');
    const [quiz, setQuiz] = useState('no');

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = (pageIndex) => {
        setSelectedPages(prevSelectedPages => {
            if (prevSelectedPages.includes(pageIndex)) {
                return prevSelectedPages.filter(index => index !== pageIndex);
            } else {
                return [...prevSelectedPages, pageIndex];
            }
        });
    };

    const handleSubmit = async () => {
        if (flashcardNumber < 1 || flashcardNumber > 25) {
            setErrorMessage('The maximum number of flashcards is 25. Please enter a number within the limit.');
            setModalVisible(true);    
            return;
        }
        setLoading(true);
  
        // Convert zero-based indices to one-based
      const oneBasedPages = selectedPages.map(page => page + 1);
  
      console.log(selectedPages);
      console.log(fileType);
      console.log(flashcardNumber);
  
      const data = {
        pages: oneBasedPages,
        flashcard_number: flashcardNumber,
        quiz: quiz ? 'yes' : 'no',
        file_ext: fileType,
        course: course,
        username: username,
      };
      console.log(data)
    
        try {
          const response = await axios.post('http://100.66.37.131:5000/process', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
            // Handle the response from the backend
            const { flashcards, quiz_cards } = response.data;
            setLoading(false);


            if (flashcards) {
                console.log(flashcards)
                // Handle the flashcards data, e.g., navigate to a new screen to display flashcards
                navigation.navigate('GeneratedFlashcards', { flashcards: flashcards, quizCards: quiz_cards });
            } else {
                setErrorMessage('Filed to generate flashcards');
                setModalVisible(true);        
            }
        } catch (error) {
            setLoading(false);
            
            setErrorMessage('Error submitting your request.');
            setModalVisible(true);    
            console.error('Error submitting form', error);
        }
    };


    return (
        <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Preview PDF Pages</Text>
            <View style={styles.previewBox}>
                {images && images.map((image, pageIndex) => (
                    <View key={pageIndex} style={styles.pageContainer}>
                        <Image
                            source={{ uri: image }}
                            style={styles.pageImage}
                            // resizeMode="contain"
                        />
                        <CustomCheckbox
                            value={selectedPages.includes(pageIndex)}
                            onValueChange={() => handleCheckboxChange(pageIndex)}
                            label="Select this page"
                        />
                    </View>
                ))}
            </View>
            <View style={styles.inputContainer}>
                <Icon name="list-outline" size={20} color="#333" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter number of flashcards"
                    keyboardType="numeric"
                    value={flashcardNumber}
                    onChangeText={setFlashcardNumber}
                />
            </View>
            <QuizCustomCheckbox
                value={quiz ? 'yes' : 'no'}
                onValueChange={value => setQuiz(value === 'yes')}
                label="Do you want a quiz?"
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}disabled={loading}>
                {loading ? (
                <View style={styles.buttonContent}>
                    <Text style={styles.submitButtonText}>Processing...</Text>
                    <ActivityIndicator size="small" color="#fff" style={styles.activityIndicator} />
                </View>
                ) : (
                <Text style={styles.submitButtonText}>Process Selected Pages</Text>
                )}
            </TouchableOpacity>


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
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    keyboardAvoidingContainer: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#00796b',
        marginVertical: 20,
        fontWeight: 'bold',
    },
    previewBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    pageContainer: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    pageImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#00796b',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#00796b',
        borderColor: '#5cb85c',
    },
    checkMark: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#00796b',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: '#00796b',
        borderWidth: 1,
        borderRadius: 5,
    },
    inputIcon: {
        marginRight: 10,
    },    
    input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    },
    submitButton: {
        backgroundColor: '#00796b',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
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

export default PreviewPdfScreen;
