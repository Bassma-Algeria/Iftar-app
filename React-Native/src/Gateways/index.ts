import {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {RestaurantsOwnersFakeGateway} from './AuthGateway/Fake/RestaurantOwnersFakeGateway';
import {FakeRestaurantsGateway} from './RestaurantsGateway/Fake/FakeRestaurantsGateway';
import {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';

const restuarantsGateway: IRestaurantsGateway = new FakeRestaurantsGateway();
const restaurentOwner: IAuthGateway = new RestaurantsOwnersFakeGateway();

export {restuarantsGateway, restaurentOwner};
