import { Restaurant } from "../../../../Domain/Restaurant/Restaurant";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { IRestaurantsGateway } from "../../../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

import { RestaurantInfo } from "./@types/Helpers";

export interface IRestaurantPersistanceFacade {
  findByName(keyword: string): Promise<RestaurantInfo[]>;
  save(restaurant: RestaurantInfo): Promise<RestaurantInfo>;
  getAll(): Promise<RestaurantInfo[]>;
  getById(restaurantId: string): Promise<RestaurantInfo | undefined>;
  update(newRestaurentInfo: RestaurantInfo): Promise<RestaurantInfo>;
  deleteAll(): Promise<void>;
  findByOwnerId: (ownerId: string) => Promise<RestaurantInfo[]>;
}

class RestaurantsGateway implements IRestaurantsGateway {
  constructor(private readonly restaurantPersistence: IRestaurantPersistanceFacade) {}

  async findByOwnerId(ownerId: string): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantPersistence.findByOwnerId(ownerId);
    return restaurants.map((restaurant) => new Restaurant(restaurant));
  }

  async update(newRestaurantInfo: IRestaurant): Promise<IRestaurant> {
    const updatedRestaurant = await this.restaurantPersistence.update(newRestaurantInfo.info());
    return new Restaurant(updatedRestaurant);
  }

  async findByName(keyword: string): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantPersistence.findByName(keyword);
    return restaurants.map((restaurant) => new Restaurant(restaurant));
  }

  async save(restaurant: IRestaurant): Promise<IRestaurant> {
    const savedRestaurant = await this.restaurantPersistence.save(restaurant.info());
    return new Restaurant(savedRestaurant);
  }

  async getAll(): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantPersistence.getAll();
    return restaurants.map((restaurant) => new Restaurant(restaurant));
  }

  async getById(restaurantId: string): Promise<IRestaurant | undefined> {
    const restaurant = await this.restaurantPersistence.getById(restaurantId);
    if (restaurant) {
      return new Restaurant(restaurant);
    } else {
      return undefined;
    }
  }

  async deleteAll(): Promise<void> {
    await this.restaurantPersistence.deleteAll();
  }
}
export { RestaurantsGateway };
