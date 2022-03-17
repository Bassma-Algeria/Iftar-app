import {RestaurantsFakeGateway} from './RestaurantsGateway/Fake/RestaurantsFakeGateway';
import {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';

const restuarantsGateway: IRestaurantsGateway = new RestaurantsFakeGateway();

export {restuarantsGateway};
