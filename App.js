import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import LoginComp from './components/loginComp';

export default function App() {

    const [afficher, changeAfficher] = useState(false);

    function setAfficher() {
        changeAfficher(true);
    };

    function setHide() {
        changeAfficher(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okay !</Text>
            <Button title="CLIQUEZ" onPress={setAfficher}/>
            <LoginComp visible={afficher}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
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