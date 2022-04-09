import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import {COLORS} from '../theme/Colors';

import {AuthContextProvider} from './_context_/AuthContextProvider';

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
    <>
      <StatusBar backgroundColor={COLORS.beige} barStyle="dark-content" />

      <AuthContextProvider>
        <Stack.Navigator screenOptions={screensOptions}>
          <Stack.Screen name="StartupStack" component={StartupStack} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
      </AuthContextProvider>
    </>
  );
};

export {MainStack};
