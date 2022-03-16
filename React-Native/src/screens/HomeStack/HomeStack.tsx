import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// types
import {HomeStackParamsList} from './HomeStack.types';
import {MainStackScreenProps} from '../MainStack.types';

// screens
import {Map} from './screens/Map/Map';

interface Props extends MainStackScreenProps<'HomeStack'> {}

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export {HomeStack};
