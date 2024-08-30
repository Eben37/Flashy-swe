import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const GeneratedFlashcardsFree = ({ route }) => {
  const { flashcards = [] } = route.params || {};
  
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Generated Flashcards</Text>
      <ScrollView contentContainerStyle={styles.flashcardsContainer}>
        {flashcards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.flashcard}
            onPress={() => toggleCard(index)}
          >
            <View style={[styles.cardContent, activeCardIndex === index && styles.cardContentActive]}>
              {activeCardIndex === index ? (
                <Text style={[styles.cardText, styles.back]}>
                  {card.back}
                </Text>
              ) : (
                <Text style={[styles.cardText, styles.front]}>
                  {card.front}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#00796b',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flashcardsContainer: {
    flexDirection: 'column', // Arrange flashcards in a column
    alignItems: 'center', // Center flashcards horizontally
    margin: 10,
  },
  flashcard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%', // Full width of the screen
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    width: '100%',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
  front: {
    fontWeight: 'bold',
    color: '#000',
  },
  back: {
    color: '#555',
  },
});

export default GeneratedFlashcardsFree;
