import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const  LoginComp = (props) => {
    return (
        <View style={styles.loginComp}>
            <Modal isVisible={props.visible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.textTitre}>Titre du modal</Text>
                    <Text style={styles.textSousTitre}>Sous-titre du modal</Text>
                    <Text style={styles.textContenu}>J’ai l’honneur de venir très respectueusement solliciter auprès de votre haute bienveillance, la faveur de...</Text>
                    <View style={styles.boutonContainer}>
                        <TouchableOpacity>
                            <Text style={styles.cancelBouton}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.okayBouton}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20,
    },

    loginComp: {
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        height: '60%',
    },

    textTitre: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    textSousTitre: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,
    },

    textContenu: {
        textAlign: 'justify',
        lineHeight: 30,
        marginTop: 10,
        marginBottom: 20,
    },

    boutonContainer: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },

    cancelBouton: {
        color: 'red',
        backgroundColor: '#eeeeee',
        lineHeight: 35,
        width: 100,
        textAlign: 'center',
        borderRadius: 8,
        fontWeight: 'bold',
    },

    okayBouton: {
        backgroundColor: '#eeeeee',
        lineHeight: 35,
        width: 100,
        textAlign: 'center',
        borderRadius: 8,
        fontWeight: 'bold',
    }
});

export default LoginComp;