import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp} from 'container';

const Stack = createStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export {PublicStack};
