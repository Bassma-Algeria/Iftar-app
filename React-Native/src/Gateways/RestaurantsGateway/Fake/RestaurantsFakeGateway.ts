import type {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
} from '../RestaurantsGateway.interface';

import {RESTAURANTS} from './RESTAURANTS';

class RestaurantsFakeGateway implements IRestaurantsGateway {
  async addRestaurant(info: RestaurantInfoToAdd): Promise<void> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (info.name === 'wrongName') {
          reject('something went wrong');
        } else {
          resolve();
        }
      }, 600);
    });
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
