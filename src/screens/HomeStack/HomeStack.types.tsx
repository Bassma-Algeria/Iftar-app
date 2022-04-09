import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RestaurantInfo} from '../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';
import type {UsageModes} from './screens/Map/_context_/MapContextProvider';

export type HomeStackParamsList = {
  Map: undefined | {selectedRestaurant?: RestaurantInfo; usageMode?: UsageModes};
  Search: undefined;
  Profile: undefined;
};

export type HomeStackScreenProps<CurrentScreen extends keyof HomeStackParamsList> =
  NativeStackScreenProps<HomeStackParamsList, CurrentScreen>;
