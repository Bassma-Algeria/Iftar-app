import type {LocationCords} from '../../@types/LocationCords';

export interface RestaurantInfo {
  restaurantId: string;
  name: string;
  ownerName: string;
  openingTime: Date;
  closingTime: Date;
  pictures: string[];
  ownerNumber: string;
  location: LocationCords;
}

export interface RestaurantInfoToAdd {
  name: string;
  ownerName: string;
  locationCoords: LocationCords | undefined;
  placeName: string;
  openingTime: string;
  closingTime: string;
  pictures: any[];
}

export interface IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInfo[]>;
  addRestaurant(info: RestaurantInfoToAdd): Promise<void>;

  // searchFor(keyword: string): Promise<RestaurantInfo | undefined>;
}
