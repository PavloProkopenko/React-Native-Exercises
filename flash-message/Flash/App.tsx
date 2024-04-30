import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button, 
  View
} from 'react-native';

import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

const Separator = () => <View style = {styles.separator} />

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>
        In this app you can see flash messages
      </Text>
      <Separator />
      <Button
        onPress={() => {
          showMessage({
            message: 'Hello user! Now, you looking at this message',
            type: 'default',
            description: 'This is our first message',
            color: 'white',
          })
        }}
        title = "Show flash message"
        color='#841'
      />
      <Separator />
      <Button 
        onPress={() => {
          hideMessage()
        }}
        title='Hide flash message'
        color='#841'
      />
      <FlashMessage position='top' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#cae2'
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: 'grey'
  },
  separator: {
    marginVertical: 16
  }
});

export default App;
