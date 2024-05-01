import React, {useCallback, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>
        Welcome to app!
      </Text>
      <GestureHandlerRootView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enableDynamicSizing = {true}
        >
        <BottomSheetView style={styles.container}>
          <Text>Awesome 🎉</Text>
          <Text>This is our first bottom sheet</Text>
          <Text>Great Work!🎉</Text>
        </BottomSheetView>
      </BottomSheet>
        </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#223b'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
