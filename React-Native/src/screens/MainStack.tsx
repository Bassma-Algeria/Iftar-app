import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import type {MainStackParamsList} from './MainStack.types';

import {StartupStack} from './StartupStack/StartupStack';
import {HomeStack} from './HomeStack/HomeStack';

interface Props {}

const Stack = createNativeStackNavigator<MainStackParamsList>();

const MainStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="StartupStack" component={StartupStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export {MainStack};
