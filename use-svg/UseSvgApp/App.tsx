import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Heart from "./src/svg/Heart.svg";

type Props = {}
export default class App extends Component<Props>{
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <Heart height={400} width={400} />
        <Text style={styles.text}>Love is when your code works correctly</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black'
  }
});
