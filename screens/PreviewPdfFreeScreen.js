import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, ActivityIndicator, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons


// Custom Checkbox Component
const CustomCheckbox = ({ isChecked, onToggle, isDisabled }) => (
  <TouchableOpacity 
    onPress={!isDisabled ? onToggle : null} 
    style={[styles.checkboxContainer, isDisabled && styles.checkboxDisabled]}
  >
    <View style={[styles.checkbox, isChecked && styles.checkboxChecked, isDisabled && styles.checkboxDisabled]}>
      {isChecked && <Text style={styles.checkMark}>✓</Text>}
    </View>
    <Text style={[styles.label, isDisabled && styles.labelDisabled]}>Select this page</Text>
  </TouchableOpacity>
);

const PreviewPdfFreeScreen = ({ route }) => {
  const { images, fileType } = route.params || {};

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedPages, setSelectedPages] = useState([]);
  const [flashcardNumber, setFlashcardNumber] = useState('');
  const maxSelectable = 5;

  const handleCheckboxChange = (index) => {
    const newSelectedPages = [...selectedPages];
    if (newSelectedPages.includes(index)) {
      newSelectedPages.splice(newSelectedPages.indexOf(index), 1);
    } else if (newSelectedPages.length < maxSelectable) {
      newSelectedPages.push(index);
    }
    setSelectedPages(newSelectedPages);
  };

  const handleFormSubmit = async () => {
    if (flashcardNumber < 1 || flashcardNumber > 5) {
      setErrorMessage('The maximum number of flashcards for Freemium is 5. Please enter a number within the limit.');
      setModalVisible(true);
      return;
    }
    setLoading(true);

    // Convert zero-based indices to one-based
    const oneBasedPages = selectedPages.map(page => page + 1);

    console.log(selectedPages);
    console.log(fileType);
    console.log(flashcardNumber);
  
    try {
      const response = await axios.post(`${process.env.API_BACKEND}/process_free`, {
        pages: oneBasedPages,
        file_ext: fileType,  // Replace with actual file extension if needed
        flashcard_number: flashcardNumber,
      });
  
      const { flashcards } = response.data;
      setLoading(false);

      if (flashcards) {
        console.log(flashcards)
        // Handle the flashcards data, e.g., navigate to a new screen to display flashcards
        navigation.navigate('GeneratedFlashcardsFree', { flashcards: flashcards });
      } else {
        setErrorMessage('Failed to generate flashcards');
        setModalVisible(true);
      }
    } catch (error) {
      setLoading(false);
      console.error('Upload Error:', error);
      setErrorMessage('There was an issue processing your request');
      setModalVisible(true);
    }
  };

  // Add a defensive check
  if (!Array.isArray(images)) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: No pages found to display.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Preview PDF Pages</Text>
      <View style={styles.previewBox}>
        {images.map((image, index) => (
          <View key={index} style={[styles.pagePreview, index >= 10 && styles.grayedOut]}>
            <Image source={{ uri: image }} style={styles.image} />
            <CustomCheckbox
              isChecked={selectedPages.includes(index)}
              onToggle={() => handleCheckboxChange(index)}
              isDisabled={index >= 10 || (selectedPages.length >= maxSelectable && !selectedPages.includes(index))}
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
      <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}disabled={loading}>
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
  pagePreview: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  grayedOut: {
    backgroundColor: '#e0e0e0',
    opacity: 0.5,
  },
  image: {
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
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00796b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#00796b',
  },
  checkboxDisabled: {
    backgroundColor: '#e0e0e0',
    borderColor: '#ccc',
  },
  checkMark: {
    color: 'white',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: '#00796b',
  },
  labelDisabled: {
    color: '#a0a0a0',
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
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
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

export default PreviewPdfFreeScreen;
