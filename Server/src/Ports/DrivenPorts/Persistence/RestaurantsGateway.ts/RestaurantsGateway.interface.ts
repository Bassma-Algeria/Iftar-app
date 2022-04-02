import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";

export interface IRestaurantsGateway {
  getById(restaurantId: string): Promise<IRestaurant | undefined>;
  findByName(name: string): Promise<IRestaurant[]>;
  save(owner: IRestaurant): Promise<IRestaurant>;
  getAll(): Promise<IRestaurant[]>;
  update(newRestaurantInfo: IRestaurant): Promise<IRestaurant>;
  findByOwnerId(ownerId: string): Promise<IRestaurant[]>;
}
