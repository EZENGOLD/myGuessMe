import React, {useState} from "react";
import {StyleSheet, TextInput, Button, View} from "react-native";

const LoginComp = (props) => {

    const [val1, change1] = useState("");
    const [val2, change2] = useState("");

    const lireVal1 = (v1) => {
        change1(v1);
    };

    const lireVal2 = (v2) => {
        change2(v2);
    };

    return (
        <View>
            <TextInput
                placeholder="Valeur 1"
                style={{padding: 10}}
                value={val1}
                onChangeText={lireVal1}
            />
            <TextInput
                placeholder="Valeur 2"
                style={{padding: 10}}
                value={val2}
                onChangeText={lireVal2}
            />
            <Button title="Envoyer" onPress={props.onTakeValues.bind(this, val1, val2)}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LoginComp;