import {StyleSheet} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        fontSize: 14,
    },
    blackTitle: {
        fontFamily: 'open-sans-bold',
        color: 'black',
        fontSize: 18,
    },
    whiteTitle: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 18,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
})