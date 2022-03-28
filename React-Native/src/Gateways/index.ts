import {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {RestaurantsOwnersFakeGateway} from './AuthGateway/Fake/RestaurantOwnersFakeGateway';
import {MapBoxDirectionGateway} from './DirectionGateway/DirectionGateway';
import {IDirectionGateway} from './DirectionGateway/DirectionGateway.interface';
import {GeoapifyGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway';
import {IGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway.interface';
import {FakeRestaurantsGateway} from './RestaurantsGateway/Fake/FakeRestaurantsGateway';
import {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';

const restuarantsGateway: IRestaurantsGateway = new FakeRestaurantsGateway();
const restaurentOwner: IAuthGateway = new RestaurantsOwnersFakeGateway();
const geoCodingGateway: IGeoCodingGateway = new GeoapifyGeoCodingGateway();
const directionGateway: IDirectionGateway = new MapBoxDirectionGateway();

export {restuarantsGateway, restaurentOwner, geoCodingGateway, directionGateway};
