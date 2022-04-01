import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";

export interface IRestaurantsGateway {
  getRestaurantById(restaurantId: string): Promise<IRestaurant | undefined>;
  searchByName(name: string): Promise<IRestaurant[]>;
  save(owner: IRestaurant): Promise<IRestaurant>;
  getAll(): Promise<IRestaurant[]>;
  update(newRestaurantInfo: IRestaurant): Promise<IRestaurant | undefined>;
  getRestaurantsByOwnerId(ownerId: string): Promise<IRestaurant[]>;
}
