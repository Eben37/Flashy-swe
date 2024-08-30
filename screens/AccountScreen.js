import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';  // Importing icons

const AccountScreen = ({ route }) => {
  const { username, email, plan } = route.params || {};
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogout = async () => {
    try {
        await axios.get('http://100.66.37.131:5000/logout');
        navigation.navigate('HomeScreen');
    } catch (error) {
      setErrorMessage('Logout failed. Please try again.');
      setModalVisible(true);
    }
};

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.header}>Account Details</Text>
      
      <View style={styles.detailContainer}>
        <FontAwesome name="user" size={20} color="#00796b" />
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{username}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <FontAwesome name="envelope" size={20} color="#00796b" />
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <FontAwesome name="star" size={20} color="#00796b" />
        <Text style={styles.label}>Plan:</Text>
        <Text style={styles.value}>{plan}</Text>
      </View>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={20} color="#ffffff" />
        <Text style={styles.logoutButtonText}>Log Out</Text>
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
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
},
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    color: '#00796b',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  value: {
    fontSize: 15,
    color: '#00796b',
    fontWeight: 'bold',
    flex: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
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

export default AccountScreen;
