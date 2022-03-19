import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StartupStackStackParamsList = {
  Welcom: undefined;
  ChooseUsageType: undefined;
  Register: undefined;
};

export type StartupStackScreenProps<
  CurrentScreen extends keyof StartupStackStackParamsList,
> = NativeStackScreenProps<StartupStackStackParamsList, CurrentScreen>;
