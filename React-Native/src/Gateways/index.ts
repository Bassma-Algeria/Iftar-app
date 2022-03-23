import {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {RestaurantsOwnersFakeGateway} from './AuthGateway/Fake/RestaurantOwnersFakeGateway';
import {RestaurantsFakeGateway} from './RestaurantsGateway/Fake/RestaurantsFakeGateway';
import {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';

const restuarantsGateway: IRestaurantsGateway = new RestaurantsFakeGateway();
const RestaurentOwner: IAuthGateway = new RestaurantsOwnersFakeGateway();

export {restuarantsGateway, RestaurentOwner};
