import {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {RestaurantsOwnersFakeGateway} from './AuthGateway/Fake/RestaurantOwnersFakeGateway';
import {GeoapifyGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway';
import {IGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway.interface';
import {FakeRestaurantsGateway} from './RestaurantsGateway/Fake/FakeRestaurantsGateway';
import {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';

const restuarantsGateway: IRestaurantsGateway = new FakeRestaurantsGateway();
const restaurentOwner: IAuthGateway = new RestaurantsOwnersFakeGateway();
const geoCodingGateway: IGeoCodingGateway = new GeoapifyGeoCodingGateway();

export {restuarantsGateway, restaurentOwner, geoCodingGateway};
