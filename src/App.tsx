/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, NativeBaseProvider} from 'native-base';

import theme from './theme';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text bg={'baseTheme'} color={'singletons.white'}>
            Hello kaisa ha bhai
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};
export default App;
