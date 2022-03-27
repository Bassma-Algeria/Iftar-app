import type {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
} from '../RestaurantsGateway.interface';

import {RESTAURANTS} from './RESTAURANTS';

class FakeRestaurantsGateway implements IRestaurantsGateway {
  async searchFor(keyword: string): Promise<RestaurantInfo[]> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (keyword === 'wrong') {
          return reject('something went wrong');
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

  async getRestaurantsOfAuthUser(): Promise<RestaurantInfo[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RESTAURANTS.slice(0, 3)), 900);
    });
  }
}

export {FakeRestaurantsGateway};
