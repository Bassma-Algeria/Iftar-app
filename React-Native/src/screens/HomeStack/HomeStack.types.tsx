import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  Map: undefined;
};

export type HomeStackScreenProps<
  CurrentScreen extends keyof HomeStackParamsList,
> = NativeStackScreenProps<HomeStackParamsList, CurrentScreen>;
