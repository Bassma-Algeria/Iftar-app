import { Coords, NonFunctionProperties } from "../../../../@types/helperTypes";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { RestaurantInfo } from "./@types/Helpers";
import { IRestaurantPersistance } from "./RestaurantsGateway";

export class FakeRestaurantPersistence implements IRestaurantPersistance {
  private store = new Map<string | undefined, RestaurantInfo>();

  save(
    restaurant: NonFunctionProperties<IRestaurant>
  ): Promise<NonFunctionProperties<IRestaurant>> {
    this.store.set(restaurant.restaurantId, restaurant);
    return Promise.resolve(restaurant);
  }

  async searchByName(keyword: string): Promise<RestaurantInfo[]> {
    let results: RestaurantInfo[] = [];
    this.store.forEach((restaurant) => {
      if (restaurant.name.includes(keyword)) {
        results.push(restaurant);
      }
    });
    return results;
  }
  async getAll(): Promise<RestaurantInfo[]> {
    return Array.from(this.store.values());
  }
  async getRestaurantById(restaurantId: string): Promise<RestaurantInfo | undefined> {
    return this.store.get(restaurantId);
  }
  async updateName(restaurantId: string, name: string): Promise<RestaurantInfo> {
    const restaurant = this.store.get(restaurantId);

    if (restaurant) {
      restaurant.name = name;
    }

    this.store.set(restaurantId, restaurant!);

    return restaurant!;
  }
  async updateLocation(
    restaurantId: string,
    coords: Coords,
    locationName: string
  ): Promise<RestaurantInfo> {
    const restaurant = this.store.get(restaurantId);

    if (restaurant) {
      restaurant.locationCoords = coords;
      restaurant.locationName = locationName;
    }

    this.store.set(restaurantId, restaurant!);

    return restaurant!;
  }
}
