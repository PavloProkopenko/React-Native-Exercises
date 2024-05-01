import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

// The key is use when referencing the example value
const STORAGE_KEY = 'RANDOM_VALUE';
const Separator = () => <View style={styles.separator} />

function App(): React.JSX.Element {
  // Function for storing values
  async function setValue() {
    const randomNumber = Math.random();

    try {
      await EncryptedStorage.setItem(STORAGE_KEY, JSON.stringify(randomNumber));
      Alert.alert(`The value of ${randomNumber} was succesfully saved`)
      // There is first value we've stored
    } catch (error) {
      Alert.alert(`The value ${randomNumber} could not be saved - ${error}`);
      // There was an error on the native side
    }
  }

  // Function for removing values
  async function removeValue() {
    try {
      await EncryptedStorage.removeItem(STORAGE_KEY)
      Alert.alert(`The value with key ${STORAGE_KEY} was succesfully deleted`);
      // Here we are deleting user session
    } catch (error) {
      Alert.alert(
        `The value with key ${STORAGE_KEY} could not be deleted - ${error}`
      );
    }
  }

  // Function for cleaning all previously saved values
  async function clearStorage() {
    try {
      await EncryptedStorage.clear();
      Alert.alert('The storage has been successfully cleared');
    } catch (error) {
      Alert.alert(`The storage could not be cleared - ${error}`);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
        <Text style={styles.text}>
          This app has encrypted storage
        </Text>
      <Separator />
        <Button
          title='Set value to storage'
          onPress={setValue}
          color='green'
        />
      <Separator />
        <Button
          title='Remove value from storage'
          onPress={removeValue}
          color='red'
        />
      <Separator />
        <Button
          title='Clear storage'
          onPress={clearStorage}
          color='black'
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#014'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 16,
  }
});

export default App;
