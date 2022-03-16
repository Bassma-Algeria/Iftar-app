import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import type {StartupStackStackParamsList} from './StartupStack.types';
import type {MainStackScreenProps} from '../MainStack.types';

import {Welcom} from './screens/Welcom/Welcom';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const Stack = createNativeStackNavigator<StartupStackStackParamsList>();

const StartupStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Welcom" component={Welcom} />
    </Stack.Navigator>
  );
};

export {StartupStack};
