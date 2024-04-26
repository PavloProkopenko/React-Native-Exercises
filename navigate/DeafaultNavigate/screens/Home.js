import React from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native';


export default function Home() {
    return (
        <SafeAreaView style = {styles.root}>
            <Text style = {styles.text}>
                This is Home screen
            </Text>        
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
    }
})