import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../container';
import {PublicStack} from './StackNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Public" component={PublicStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
