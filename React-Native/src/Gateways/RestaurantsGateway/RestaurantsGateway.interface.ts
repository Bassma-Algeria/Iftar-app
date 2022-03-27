import type {LocationCords} from '../../@types/LocationCords';

export type Time = {hour: number; minut: number};

export interface RestaurantInfo {
  restaurantId: string;
  name: string;
  ownerName: string;
  openingTime: Time;
  closingTime: Time;
  pictures: any[];
  ownerNumber: string;
  locationCoords: LocationCords;
  locationName: string;
}

export interface RestaurantInfoToAdd {
  name: string;
  ownerName: string;
  locationCoords: LocationCords | undefined;
  locationName: string;
  openingTime: Time;
  closingTime: Time;
  pictures: any[];
}

export interface IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInfo[]>;
  addRestaurant(info: RestaurantInfoToAdd): Promise<void>;
  searchFor(keyword: string): Promise<RestaurantInfo[]>;
  getRestaurantsOfAuthUser(): Promise<RestaurantInfo[]>;
}
