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
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Amplify} from 'aws-amplify';
// @ts-ignore
import {withAuthenticator} from 'aws-amplify-react-native';
import theme from './utils/theme';
import RootNavigator from './appNavigator/RootNavigator';
import Config from './aws-exports';
// @ts-ignore

Amplify.configure(Config);

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};
const signUpConfig = {
  header: 'My customized sign up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'string',
    },
  ],
};
export default withAuthenticator(App);
