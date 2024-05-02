import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Animated, {useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

const Separator = () => <View style={styles.separator}/>

function App(): React.JSX.Element {
  const width = useSharedValue<number>(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50)
  }

  const resetPress = () => {
    width.value = withTiming(100)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, width}} />
      <Button onPress={handlePress} title='Click me' />
      <Separator />
      <Button onPress={resetPress} title='Reset' />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5313'
  },
  separator: {
    marginVertical: 16,
  }
});

export default App;
