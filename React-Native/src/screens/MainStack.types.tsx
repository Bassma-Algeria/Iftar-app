import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamsList = {
  StartupStack: undefined;
  HomeStack: undefined;
};

export type MainStackScreenProps<
  CurrentScreen extends keyof MainStackParamsList,
> = NativeStackScreenProps<MainStackParamsList, CurrentScreen>;
