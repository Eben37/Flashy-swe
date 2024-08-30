import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ScrollView, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const UploadScreen = ({ route }) => {
  const { username } = route.params || {};
  const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [course, setCourse] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);


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
            setErrorMessage('Unexpected result type.');
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

    setLoading(true);

    const formData = new FormData();
    formData.append('file', {
      uri: selectedFile.uri,
      name: selectedFile.name,
      type: selectedFile.type,
    });
    formData.append('course', course);
    formData.append('username', username);

    try {
      const response = await axios.post('http://100.66.37.131:5000/preview_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { file_ext, images, pages } = response.data;

      setLoading(false);

      if (file_ext === 'pdf') {
        navigation.navigate('PreviewPdfScreen', { images: images, fileType: file_ext, course: course, username: username });
      } else if (file_ext === 'docx' || file_ext === 'pptx') {
        navigation.navigate('PreviewTextScreen', { pages: pages, fileType: file_ext, course: course, username: username });
      } else {
        setErrorMessage('Unsupported file type');
        setModalVisible(true);        
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('There was an issue uploading your file');
      setModalVisible(true);        
    }

    // clear selected file
    setSelectedFile('');
  };


const handleViewFlashcards = async () => {
  try {
      const response = await axios.post('http://100.66.37.131:5000/courses', {
          username
      });
      const { courses } = response.data;
      navigation.navigate('SelectCourseScreen', { courses: courses, username: username });
  } catch (error) {
    setErrorMessage('Failed to display your courses. Please try again');
    setModalVisible(true);        
  }
};


  const handleViewAccount = async () => {
    try {
        const response = await axios.post('http://100.66.37.131:5000/userAccount', {
            username
        });
        const { email, plan } = response.data;
        navigation.navigate('AccountScreen', { email: email, username: username, plan: plan });
    } catch (error) {
      setErrorMessage('Failed to display your account details. Please try again');
      setModalVisible(true);        
    }
  };


  return (
    <>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <Image 
                            source={require('../assets/flashy-upload-logo.png')} // Replace with your logo path
                            style={styles.logo}
                        />
                        <View style={styles.headerTextContainer}>
                        <Text style={styles.title}>Welcome, {username}</Text>
                        </View>
                    </View>
                </View>

        {/* <View style={styles.headerContainer}>
          <Icon name="person-circle-outline" size={60} color="#00796b" />
          <Text style={styles.header}>Welcome, {username}</Text>
        </View> */}

        <Text style={styles.subHeader}>Upload a Document</Text>

        <TouchableOpacity style={styles.fileButton} onPress={handleFilePick}>
          <Icon name="document-attach-outline" size={20} color="#fff" />
          <Text style={styles.fileButtonText}>Choose File</Text>
        </TouchableOpacity>

        {selectedFile && (
          <View style={styles.uploadPreview}>
            <Icon name="document-text-outline" size={20} color="#00796b" />
            <Text style={styles.previewText}>
              <Text style={styles.previewTextStrong}>Selected File: </Text>
              {selectedFile.name}
            </Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <Icon name="book-outline" size={20} color="#333" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Please enter the course for this file"
            value={course}
            onChangeText={setCourse}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}disabled={loading}>
          <Icon name="cloud-upload-outline" size={20} color="#fff" />
        {loading ? (
          <View style={styles.buttonContent}>
            <Text style={styles.submitButtonText}>Uploading...</Text>
            <ActivityIndicator size="small" color="#fff" style={styles.activityIndicator} />
          </View>
        ) : (
          <Text style={styles.submitButtonText}>Upload</Text>
        )}

        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
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
      >
          <Icon name="add-circle" size={24} color="#fff" />
          <Text style={styles.navTextActive}>Generate</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.navItem} 
          onPress={handleViewFlashcards}
      >
          <Icon name="albums-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Flashcards</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.navItem} 
          onPress={handleViewAccount}
      >
          <Icon name="person-circle-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Account</Text>
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
  headerContainer: {
    position: 'absolute',
    width: '100%',
    top: 20,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
},
headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
},
logo: {
    width: 45,
    height: 65,
    marginRight: 20,
},
headerTextContainer: {
    justifyContent: 'center',
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
},
subHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#00796b',
},
fileButton: {
    flexDirection: 'row',
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileButtonText: {
    color: '#ffffff',
    fontSize: 16,
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
    flexDirection: 'row',
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 10,
  },
  link: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
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
      marginTop: 5,
  },
  navTextActive: {
    color: '#fff',
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

export default UploadScreen;
