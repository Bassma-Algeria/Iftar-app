import {
  IRestaurantsGateway,
  RestaurantInfo,
} from './RestaurantsGateway.interface';

class RestaurantsGateway implements IRestaurantsGateway {
  getRestaurant(restaurantId: string): Promise<RestaurantInfo> {
    throw new Error('Method not implemented.');
  }
  getRestaurants(): Promise<RestaurantInfo[]> {
    throw new Error('Method not implemented.');
  }
}

export {RestaurantsGateway};
