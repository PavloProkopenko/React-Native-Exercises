import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    if(Platform.OS === 'android')
    SplashScreen.hide();
  }, [])

  return(
    <SafeAreaView style = {styles.root}>
      <Text style={styles.text}>
        Welcome to app with custom splash screen!
      </Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
    textAlign:'center'
  }
});


