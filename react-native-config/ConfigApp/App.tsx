import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Config from 'react-native-config';

const url = Config.API_URL;

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        Google API: {url} {/* I think, you can't show this variables in your app */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
