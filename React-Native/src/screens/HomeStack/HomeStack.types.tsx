import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RestaurantInfo} from '../../Gateways/RestaurantsGateway/RestaurantsGateway.interface';

export type HomeStackParamsList = {
  Map: undefined | {selectedRestaurant: RestaurantInfo};
  Search: undefined;
};

export type HomeStackScreenProps<CurrentScreen extends keyof HomeStackParamsList> =
  NativeStackScreenProps<HomeStackParamsList, CurrentScreen>;
