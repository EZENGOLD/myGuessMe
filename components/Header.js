import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MesStyles from '../constants/mesStyles';
import Colors from '../constants/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={MesStyles.whiteTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 20,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;