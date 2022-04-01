import { Coords, Time } from "../../../../@types/helperTypes";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { EditInfo, updateArgs } from "../../../../UseCases/EditRestaurant/EditRestaurantFactory";

export interface IRestaurantsGateway {
  getRestaurantById(restaurantId: string): Promise<IRestaurant | undefined>;
  searchByName(name: string): Promise<IRestaurant[]>;
  save(owner: IRestaurant): Promise<IRestaurant>;
  getAll(): Promise<IRestaurant[]>;
  update({ ownerId, newRestaurantInfo }: updateArgs): Promise<IRestaurant | undefined>;
  getRestaurantsByOwnerId(ownerId: string): Promise<IRestaurant[]>;
}
