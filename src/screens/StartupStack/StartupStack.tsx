import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import type {StartupStackStackParamsList} from './StartupStack.types';
import type {MainStackScreenProps} from '../MainStack.types';

import {Splash} from './screens/Splash/Splash';
import {Welcom} from './screens/Welcom/Welcom';
import {ChooseUsageType} from './screens/ChooseUsageType/ChooseUsageType';
import {Register} from './screens/Register/Register';
import {Login} from './screens/Login/Login';

interface Props extends MainStackScreenProps<'StartupStack'> {}

const Stack = createNativeStackNavigator<StartupStackStackParamsList>();

const StartupStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcom" component={Welcom} />
      <Stack.Screen name="ChooseUsageType" component={ChooseUsageType} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export {StartupStack};
