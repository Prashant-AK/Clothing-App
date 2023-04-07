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
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import theme from './theme';
import {Splash} from './container';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <Splash />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};
export default App;
