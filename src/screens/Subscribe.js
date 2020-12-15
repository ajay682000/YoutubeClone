import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../Components/Header';

const Subscribe =() => {

    return (
        <View style={styles.root}>
            <Header />
            <Text >Subscribe Screen </Text>
        </View>
    )


}
export default Subscribe;


const styles = StyleSheet.create({
    root: {
        flex: 1
       
    }
})