import { Coords, Time } from "../../../../@types/helperTypes";
import { Restaurant } from "../../../../Domain/Restaurant/Restaurant";
import { IRestaurant } from "../../../../Domain/Restaurant/RestaurantFactory";
import { IRestaurantsGateway } from "../../../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import { EditInfo, updateArgs } from "../../../../UseCases/EditRestaurant/EditRestaurantFactory";
import { RestaurantInfo } from "./@types/Helpers";

export interface IRestaurantPersistance {
  searchByName(keyword: string): Promise<RestaurantInfo[]>;
  save(restaurant: RestaurantInfo): Promise<RestaurantInfo>;
  getAll(): Promise<RestaurantInfo[]>;
  getRestaurantById(restaurantId: string): Promise<RestaurantInfo | undefined>;
  update(newRestaurentInfo: EditInfo): Promise<RestaurantInfo | undefined> | undefined;
  deleteAll(): Promise<void>;
  getRestaurantsByOwnerId: (ownerId: string) => Promise<RestaurantInfo[]>;
}

class RestaurantsGateway implements IRestaurantsGateway {
  constructor(private readonly restaurantPersistence: IRestaurantPersistance) {}
  async getRestaurantsByOwnerId(ownerId: string): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantPersistence.getRestaurantsByOwnerId(ownerId);
    return restaurants.map((restaurant) => new Restaurant(restaurant));
  }
  async update({ ownerId, newRestaurantInfo }: updateArgs): Promise<IRestaurant | undefined> {
    let restaurant = await this.restaurantPersistence.getRestaurantById(
      newRestaurantInfo.restaurantId
    );
    if (restaurant) {
      if (ownerId !== restaurant.ownerId) {
        throw new Error("You are not the owner of this restaurant");
      } else {
        restaurant = {
          ...restaurant,
          name: newRestaurantInfo.name ? newRestaurantInfo.name : restaurant.name,
          locationCoords: newRestaurantInfo.locationCoords
            ? newRestaurantInfo.locationCoords
            : restaurant.locationCoords,
          locationName: newRestaurantInfo.locationName
            ? newRestaurantInfo.locationName
            : restaurant.locationName,
          openingTime: newRestaurantInfo.openingTime
            ? newRestaurantInfo.openingTime
            : restaurant.openingTime,
          closingTime: newRestaurantInfo.closingTime
            ? newRestaurantInfo.closingTime
            : restaurant.closingTime,
          ownerName: newRestaurantInfo.ownerName
            ? newRestaurantInfo.ownerName
            : restaurant.ownerName,
        };
        const newRestaurant = await this.restaurantPersistence.update(restaurant);
        if (newRestaurant) {
          return new Restaurant(newRestaurant);
        } else {
          return undefined;
        }
      }
    }
  }

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
