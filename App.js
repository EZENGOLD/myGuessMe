import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LoginComp from './components/loginComp';

export default function App() {

  let valeurTotal = "";

  const takeValues = (valeur1) => {
    valeurTotal = valeur1;
  };

  return (
    <View style={styles.principal}>
      <Text>Bienvenue ! Veuillez entrer deux valeurs svp ! </Text>
      <LoginComp onTakeValues={takeValues}/>
      <Text>Total : {valeurTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  principal : {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'relative',
    height: '94%',
    backgroundColor: '#f3f3f3',
    margin: 20,
    padding: 10,
  }
});
