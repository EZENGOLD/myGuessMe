import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MyButton from '../components/MyButton';
import MesStyles from '../constants/mesStyles';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);
    const [mesGuess, setMesGuess] = useState([{id: Math.random().toString(), value: currentGuess}]);

    const addGuess = (valeur) => {
        setMesGuess((curGuess) => [...curGuess, {id: Math.random().toString(), value: valeur}]);
    };

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === props.userChoice){
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === false && currentGuess < props.userChoice) || (direction === true && currentGuess > props.userChoice)){
            Alert.alert("Don\'t lie!", "You know that this is wrong...", [{text: 'Sorry !', style: 'cancel'}]);
            return;
        }

        if (direction === false) {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        addGuess(currentGuess);
        setRounds((curRounds) => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={MesStyles.text}>Openent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MyButton onPressButton={nextGuessHandler.bind(this, false)} style={{backgroundColor: Colors.accent}}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </MyButton>
                <MyButton onPressButton={nextGuessHandler.bind(this, true)}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </MyButton>
            </Card>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data = {mesGuess}
                renderItem={itemData => {itemData.item.value}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen;