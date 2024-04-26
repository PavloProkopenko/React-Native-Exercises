import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  
  return (
    <LinearGradient colors = {['#E1F0DA','#D4E7C5', '#BFD8AF']} style={styles.gradient}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.text}>This app has gradient background</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color:'#8C6A5D'
  }
});

