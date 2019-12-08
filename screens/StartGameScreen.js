import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MyButton from '../components/MyButton';

import MesStyles from '../constants/mesStyles';

const StartGameScreen = (props) => {

    const [valeur, changerValeur] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const changerValeurHandler = (val) => {
        changerValeur(val.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        changerValeur('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(valeur);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99) {
            Alert.alert(
                'Invalid number',
                'Number has to be number between 1 and 99.',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            );
            return;
        }
        setConfirmed(true);
        changerValeur('');
        setSelectedNumber(parseInt(valeur));
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summuryContainer}>
                <Text style={MesStyles.text}>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MyButton onPressButton={props.onStartGame.bind(this, selectedNumber)}>START GAME</MyButton>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={{...MesStyles.blackTitle, ...styles.title}}>Start a new game !</Text>
            <Card style={styles.inputContainer}>
                <Text style={MesStyles.text}>Select a Number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={changerValeurHandler}
                    value={valeur}
                />
                <View style={styles.buttonsContainer}>
                    <View><MyButton style={{backgroundColor: Colors.accent}} onPressButton={resetInputHandler}>Reset</MyButton></View>
                    <View><MyButton style={{backgroundColor: Colors.primary}} onPressButton={confirmInputHandler}>Confirm</MyButton></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    input: {
        width: 50,
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    buttons: {
        width: '40%',
    },

    summuryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;