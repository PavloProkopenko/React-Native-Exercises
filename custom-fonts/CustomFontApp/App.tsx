import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import { Fonts } from './styles/fonts';

export default function App() {
  return (
    <SafeAreaView
      style={styles.root}>
      <Text style={styles.text}>
        This is the text with custom font
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  root:{
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },
  text: {
    textAlign: 'center',
    color: 'black', 
    fontSize: 30,
    fontFamily: Fonts.fuzzyBubblesRegular
  }
})
