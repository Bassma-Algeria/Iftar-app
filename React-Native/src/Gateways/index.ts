import type {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {AuthGateway} from './AuthGateway/AuthGateway';
// import {FakeAuthGateway} from './AuthGateway/Fake/FakAuthGateway';

import type {IDirectionGateway} from './DirectionGateway/DirectionGateway.interface';
import {MapBoxDirectionGateway} from './DirectionGateway/DirectionGateway';

import type {IGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway.interface';
import {GeoapifyGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway';

import type {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';
import {RestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway';
// import {FakeRestaurantsGateway} from './RestaurantsGateway/Fake/FakeRestaurantsGateway';

const restuarantsGateway: IRestaurantsGateway = new RestaurantsGateway();
const authGateway: IAuthGateway = new AuthGateway();
const geoCodingGateway: IGeoCodingGateway = new GeoapifyGeoCodingGateway();
const directionGateway: IDirectionGateway = new MapBoxDirectionGateway();

export {restuarantsGateway, authGateway, geoCodingGateway, directionGateway};
