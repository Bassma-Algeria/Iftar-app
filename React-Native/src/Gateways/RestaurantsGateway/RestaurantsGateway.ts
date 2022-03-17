import {
  IRestaurantsGateway,
  RestaurantInfo,
} from './RestaurantsGateway.interface';

class RestaurantsGateway implements IRestaurantsGateway {
  getRestaurants(): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }
}

export {RestaurantsGateway};
