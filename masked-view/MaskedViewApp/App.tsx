import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default function App(){
  return (
    <MaskedView
      style = {styles.maskedView}
      maskElement={
        <SafeAreaView style = {styles.root}>
          <Text style = {styles.text}>
            Masked View
          </Text>
        </SafeAreaView>
      }>
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <Image
        source={require("./assets/img/backgroundMaskedView.jpg")}
        style = {styles.image}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent' // mask is based on alpha chanel, so that's why 'transparent'
  },
  text: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold'
  },
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%'
  },
  image: {
    flex: 1,
    height: '100%'
  }
});