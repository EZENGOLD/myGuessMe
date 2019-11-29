import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'relative',
        paddingTop: 50,
        padding: 10,
        height: '100%',
        backgroundColor: '#f3f3f3',
    },

    text: {
        marginVertical: 5,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        lineHeight: 40,
        textAlign: 'center',
    },
});