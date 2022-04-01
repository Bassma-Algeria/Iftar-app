import {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
} from './RestaurantsGateway.interface';

class RestaurantsGateway implements IRestaurantsGateway {
  getRestaurantsOfAuthUser(): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }

  editRestaurant(info: RestaurantInfo): Promise<void> {
    throw new Error('Method not implemented.');
  }

  searchFor(keyword: string): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }

  addRestaurant(info: RestaurantInfoToAdd): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getRestaurants(): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }
}

export {RestaurantsGateway};
