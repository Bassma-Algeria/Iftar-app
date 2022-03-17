import type {
  IRestaurantsGateway,
  RestaurantInfo,
} from '../RestaurantsGateway.interface';

import {RESTAURANTS} from './RESTAURANTS';

class RestaurantsFakeGateway implements IRestaurantsGateway {
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
