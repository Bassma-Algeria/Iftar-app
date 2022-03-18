import type {
  IRestaurantsGateway,
  RestaurantInfo,
} from '../RestaurantsGateway.interface';

import {RESTAURANTS} from './RESTAURANTS';

class RestaurantsFakeGateway implements IRestaurantsGateway {
  getRestaurant(restaurantId: string): Promise<RestaurantInfo> {
    try {
      const targetRestaurant = RESTAURANTS.find(
        restaurant => restaurantId === restaurant.restaurantId,
      );

      if (!targetRestaurant) {
        throw new Error("restaurant does'nt exist");
      }

      return new Promise(resolve => {
        setTimeout(() => resolve(targetRestaurant), 400);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getRestaurants(): Promise<RestaurantInfo[]> {
    try {
      return new Promise(resolve => {
        setTimeout(() => resolve(RESTAURANTS), 400);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export {RestaurantsFakeGateway};
