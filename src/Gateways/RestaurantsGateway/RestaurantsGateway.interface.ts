import type {LocationCords} from '../../@types/LocationCords';

export type Time = {hour: number; minute: number};

export interface RestaurantInfo {
  restaurantId: string;
  ownerId: string;
  name: string;
  workingTime: {opening: Time; closing: Time};
  pictures: string[];
  locationCoords: LocationCords;
  locationName: string;
}

export type RestaurantInfoToAdd = Omit<RestaurantInfo, 'restaurantId' | 'ownerId'>;
export type RestaurantInMap = Pick<RestaurantInfo, 'locationCoords' | 'name' | 'restaurantId'>;

export interface IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInMap[]>;
  getRestaurantInfo(id: string): Promise<RestaurantInfo & {ownerNumber: string}>;
  addRestaurant(info: RestaurantInfoToAdd): Promise<void>;
  searchFor(keyword: string): Promise<RestaurantInfo[]>;
  getRestaurantsOfAuthUser(): Promise<RestaurantInfo[]>;
  editRestaurant(info: RestaurantInfo): Promise<void>;
}
