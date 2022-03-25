import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// types
import type {HomeStackParamsList} from './HomeStack.types';
import type {MainStackScreenProps} from '../MainStack.types';

// screens
import {Map} from './screens/Map/Map';
import {Search} from './screens/Search/Search';
import {Profile} from './screens/Profile/Profile';

interface Props extends MainStackScreenProps<'HomeStack'> {}

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {HomeStack};
