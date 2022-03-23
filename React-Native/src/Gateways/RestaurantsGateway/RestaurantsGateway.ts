import {
  IRestaurantsGateway,
  RestaurantInfo,
  RestaurantInfoToAdd,
} from './RestaurantsGateway.interface';

class RestaurantsGateway implements IRestaurantsGateway {
  addRestaurant(info: RestaurantInfoToAdd): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getRestaurants(): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }
}

export {RestaurantsGateway};
