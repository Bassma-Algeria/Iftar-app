import { Coords } from "../../../../@types/helperTypes";
import { Restaurant } from "../../../../Domain/Restaurant/Restaurant";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { IRestaurantsGateway } from "../../../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import { RestaurantInfo } from "./@types/Helpers";

export interface IRestaurantPersistance {
  searchByName(keyword: string): Promise<RestaurantInfo[]>;
  save(restaurant: RestaurantInfo): Promise<RestaurantInfo>;
  getAll(): Promise<RestaurantInfo[]>;
  getRestaurantById(restaurantId: string): Promise<RestaurantInfo | undefined>;
  updateName(restaurantId: string, name: string): Promise<RestaurantInfo>;
  updateLocation(
    restaurantId: string,
    coord: Coords,
    locationName: string
  ): Promise<RestaurantInfo>;
}

class RestaurantsGateway implements IRestaurantsGateway {
  constructor(private readonly restaurantPersistence: IRestaurantPersistance) {}
  async searchByName(keyword: string): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantPersistence.searchByName(keyword);
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
  async getRestaurantById(restaurantId: string): Promise<IRestaurant | undefined> {
    const restaurant = await this.restaurantPersistence.getRestaurantById(restaurantId);
    return new Restaurant(restaurant as RestaurantInfo);
  }
  async updateName(restaurantId: string, name: string): Promise<IRestaurant> {
    const restaurant = await this.restaurantPersistence.updateName(restaurantId, name);
    return new Restaurant(restaurant);
  }
  async updateLocation(
    restaurantId: string,
    coords: Coords,
    locationName: string
  ): Promise<IRestaurant> {
    const restaurant = await this.restaurantPersistence.updateLocation(
      restaurantId,
      coords,
      locationName
    );
    return new Restaurant(restaurant);
  }
}
export { RestaurantsGateway };
