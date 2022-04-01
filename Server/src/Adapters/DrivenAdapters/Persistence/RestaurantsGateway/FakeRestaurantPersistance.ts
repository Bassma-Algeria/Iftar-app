import { Coords, NonFunctionProperties, Time } from "../../../../@types/helperTypes";
import { Restaurant } from "../../../../Domain/Restaurant/Restaurant";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { EditInfo } from "../../../../UseCases/EditRestaurant/EditRestaurantFactory";
import { RestaurantInfo } from "./@types/Helpers";
import { IRestaurantPersistance } from "./RestaurantsGateway";

export class FakeRestaurantPersistence implements IRestaurantPersistance {
  getRestaurantsByOwnerId(ownerId: string): Promise<NonFunctionProperties<IRestaurant>[]> {
    let results: NonFunctionProperties<IRestaurant>[] = [];
    this.store.forEach((restaurant) => {
      if (restaurant.ownerId === ownerId) {
        results.push(restaurant);
      }
    });
    return Promise.resolve(results);
  }
  async update(
    newRestaurentInfo: EditInfo
  ): Promise<NonFunctionProperties<IRestaurant> | undefined> {
    let restaurant = await this.getRestaurantById(newRestaurentInfo.restaurantId);
    if (restaurant) {
      restaurant = {
        ...restaurant,
        name: newRestaurentInfo.name,
        locationCoords: newRestaurentInfo.locationCoords,
        locationName: newRestaurentInfo.locationName,
        openingTime: newRestaurentInfo.openingTime,
        closingTime: newRestaurentInfo.closingTime,
        ownerName: newRestaurentInfo.ownerName,
        pictures: newRestaurentInfo.pictures,
      };
      const updatedRestaurant = this.save(restaurant);
      return Promise.resolve(updatedRestaurant);
    }
    return Promise.resolve(undefined);
  }
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

  async deleteAll(): Promise<void> {
    this.store.clear();
  }
}
