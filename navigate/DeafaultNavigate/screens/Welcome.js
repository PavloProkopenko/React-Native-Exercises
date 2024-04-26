import React from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default function Welcome({navigation}) {
    return (
        <SafeAreaView style = {styles.root}>
            <Text style = {styles.text}>
                This is Welcome screen
            </Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                style = {styles.button}
                title="Go to Home"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
    },
    button: {
        padding: 30,
        backgroundColor: 'green'
    }
})