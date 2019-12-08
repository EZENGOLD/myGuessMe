import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import MesStyles from '../constants/mesStyles';
import Colors from '../constants/colors';
import MyButton from '../components/MyButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={MesStyles.blackTitle}>The game is over !</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={{...MesStyles.text, ...styles.resultText}}>
                    Your phone needed <Text style={MesStyles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={MesStyles.highlight}>{props.userNumber}</Text>
                </Text>
            </View>
            <MyButton onPressButton={props.onRestart}>
                NEW GAME
            </MyButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    resultText: {
        textAlign: 'center',
        fontSize: 18,
    },

    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
});

export default GameOverScreen;