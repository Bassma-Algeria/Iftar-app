import { Coords } from "../../../../@types/helperTypes";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";

export interface IRestaurantsGateway {
  getRestaurantById(restaurantId: string): Promise<IRestaurant | undefined>;
  searchByName(name: string): Promise<IRestaurant[]>;
  save(owner: IRestaurant): Promise<IRestaurant>;
  getAll(): Promise<IRestaurant[]>;
  updateName(restaurantId: string, name: string): Promise<IRestaurant>;
  updateLocation(restaurantId: string, coords: Coords, locationName: string): Promise<IRestaurant>;
}
