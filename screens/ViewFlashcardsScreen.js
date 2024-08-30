import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions, ImageBackground, SafeAreaView } from 'react-native';

const ViewFlashcardsScreen = ({ route }) => {
    const { flashcards = [], quizCards = [], selectedCourse } = route.params || {};

    const [flippedCards, setFlippedCards] = useState({});

    const handleCardPress = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const combinedData = [
        { type: 'header', title: `Flashcards for ${selectedCourse}` },
        ...flashcards.map((item, index) => ({ ...item, id: `flashcard_${index}`, type: 'flashcard' })),
        { type: 'header', title: `Quizzes for ${selectedCourse}` },
        ...quizCards.map((item, index) => ({ ...item, id: `quizcard_${index}`, type: 'quizcard' }))
    ];

    const renderItem = ({ item }) => {
        if (item.type === 'header') {
            return (
                <ImageBackground
                    source={require("../assets/course-background.jpeg")}
                    style={styles.headerBackground}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.header}>{item.title}</Text>
                    </View>
                </ImageBackground>
            );
        } else if (item.type === 'flashcard') {
            return renderFlashcard(item);
        } else if (item.type === 'quizcard') {
            return renderQuizCard(item);
        }
        return null;
    };

    const renderFlashcard = (item) => (
        <View style={styles.flashcard}>
            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
                <Text style={[styles.flashcardText, styles.frontText, flippedCards[item.id] && styles.hidden]}>
                    {item.front}
                </Text>
                <Text style={[styles.flashcardText, styles.backText, !flippedCards[item.id] && styles.hidden]}>
                    {item.back}
                </Text>
            </TouchableOpacity>
        </View>
    );

    const renderQuizCard = (item) => (
        <View style={styles.flashcard}>
            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
                <View style={flippedCards[item.id] ? styles.hidden : null}>
                    <Text style={[styles.flashcardText, styles.questionText]}>
                        {item.question}
                    </Text>
                    {item.options.map((option, idx) => (
                        <Text key={idx} style={styles.optionItem}>
                            {option}
                        </Text>
                    ))}
                </View>
                <Text style={[styles.flashcardText, styles.answerText, flippedCards[item.id] ? null : styles.hidden]}>
                    Answer: {item.answer}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
        <FlatList
            data={combinedData}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id || `header_${index}`}
            contentContainerStyle={styles.container}
        />
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    headerBackground: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    flashcard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        padding: 20,
        marginBottom: 20,
        width: width - 40,
        alignItems: 'center',
    },
    flashcardText: {
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    frontText: {
        fontWeight: 'bold',
    },
    backText: {
        color: '#555',
    },
    questionText: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    answerText: {
        color: '#00796b',
        marginTop: 10,
    },
    optionItem: {
        textAlign: 'left',
        lineHeight: 20,
        marginVertical: 5,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    hidden: {
        display: 'none',
    },
});

export default ViewFlashcardsScreen;
