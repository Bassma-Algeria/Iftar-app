import type {IDirectionGateway} from './DirectionGateway/DirectionGateway.interface';
import {MapBoxDirectionGateway} from './DirectionGateway/DirectionGateway';

import type {IGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway.interface';
import {GeoapifyGeoCodingGateway} from './GeoCodingGateway/GeoCodingGateway';

import type {IAuthGateway} from './AuthGateway/AuthGateway.interface';
import {AuthGateway} from './AuthGateway/AuthGateway';
import {FakeAuthGateway} from './AuthGateway/Fake/FakAuthGateway';

import type {IRestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway.interface';
import {RestaurantsGateway} from './RestaurantsGateway/RestaurantsGateway';
import {FakeRestaurantsGateway} from './RestaurantsGateway/Fake/FakeRestaurantsGateway';

const geoCodingGateway: IGeoCodingGateway = new GeoapifyGeoCodingGateway();
const directionGateway: IDirectionGateway = new MapBoxDirectionGateway();

// USE THOSE IN THE DEVELOPMENT PHASE
// const restuarantsGateway: IRestaurantsGateway = new FakeRestaurantsGateway();
// const authGateway: IAuthGateway = new FakeAuthGateway();

// USE THOSE TO TEST IT WITH TEH REAL API
const restuarantsGateway: IRestaurantsGateway = new RestaurantsGateway();
const authGateway: IAuthGateway = new AuthGateway();

export {restuarantsGateway, authGateway, geoCodingGateway, directionGateway};
