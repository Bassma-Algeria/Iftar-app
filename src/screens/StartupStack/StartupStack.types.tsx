import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StartupStackStackParamsList = {
  Splash: undefined;
  Welcom: undefined;
  ChooseUsageType: undefined;
  Register: undefined;
  Login: undefined;
};

export type StartupStackScreenProps<CurrentScreen extends keyof StartupStackStackParamsList> =
  NativeStackScreenProps<StartupStackStackParamsList, CurrentScreen>;
