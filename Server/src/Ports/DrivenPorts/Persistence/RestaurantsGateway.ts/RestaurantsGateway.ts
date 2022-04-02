import {
  IRestaurantPersistanceFacade,
  RestaurantsGateway,
} from "../../../../Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { FakeRestaurantPersistenceFacade } from "../../../../Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistanceFacade";

import { IRestaurantsGateway } from "./RestaurantsGateway.interface";

let restaurantsPersistence: IRestaurantPersistanceFacade;

if (process.env.NODE_ENV === "TEST") {
  restaurantsPersistence = new FakeRestaurantPersistenceFacade();
} else {
  // change this later when you implement the read persistence
  restaurantsPersistence = new FakeRestaurantPersistenceFacade();
}

const restaurantsGateway: IRestaurantsGateway = new RestaurantsGateway(restaurantsPersistence);

export { restaurantsGateway, restaurantsPersistence };
