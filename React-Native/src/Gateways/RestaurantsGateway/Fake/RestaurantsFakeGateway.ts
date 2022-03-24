import type {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
} from '../RestaurantsGateway.interface';

import {RESTAURANTS} from './RESTAURANTS';

class RestaurantsFakeGateway implements IRestaurantsGateway {
  async searchFor(keyword: string): Promise<RestaurantInfo[]> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (keyword === 'wrong') {
          reject();
        }

        const result = RESTAURANTS.filter(({name}) => name.includes(keyword));
        resolve(result);
      }, 600);
    });
  }

  async addRestaurant(info: RestaurantInfoToAdd): Promise<void> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (info.name === 'wrongName') {
          reject('something went wrong');
        }

        resolve();
      }, 600);
    });
  }

  async getRestaurants(): Promise<RestaurantInfo[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RESTAURANTS), 600);
    });
  }
}

export {RestaurantsFakeGateway};
