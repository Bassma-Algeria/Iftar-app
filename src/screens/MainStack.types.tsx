import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {HomeStackParamsList} from './HomeStack/HomeStack.types';
import type {StartupStackStackParamsList} from './StartupStack/StartupStack.types';

export type MainStackParamsList = {
  StartupStack: NavigatorScreenParams<StartupStackStackParamsList>;
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
};

export type MainStackScreenProps<CurrentScreen extends keyof MainStackParamsList> =
  NativeStackScreenProps<MainStackParamsList, CurrentScreen>;
