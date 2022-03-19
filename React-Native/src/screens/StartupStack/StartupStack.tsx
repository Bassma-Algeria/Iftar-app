import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import type {StartupStackStackParamsList} from './StartupStack.types';
import type {MainStackScreenProps} from '../MainStack.types';

import {Welcom} from './screens/Welcom/Welcom';
import {ChooseUsageType} from './screens/ChooseUsageType/ChooseUsageType';
import {Register} from './screens/Register/Register';
interface Props extends MainStackScreenProps<'StartupStack'> {}

const Stack = createNativeStackNavigator<StartupStackStackParamsList>();

const StartupStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Welcom" component={Welcom} />
      <Stack.Screen name="ChooseUsageType" component={ChooseUsageType} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export {StartupStack};
