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

export interface IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInfo[]>;

  // addRestaurant(info: RestaurantInfo): Promise<void>;
  // searchFor(keyword: string): Promise<RestaurantInfo | undefined>;
}
