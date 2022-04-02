import type { IRestaurantOwnersGateway } from "./RestaurantOwnersGateway.interface";

import { FakeRestaurantOwnersPersistenceFacade } from "../../../../Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import {
  IRestaurantOwnersPersistenceFacade,
  RestaurantOwnersGateway,
} from "../../../../Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";

let ownersPersistence: IRestaurantOwnersPersistenceFacade;

if (process.env.NODE_END === "TEST") {
  ownersPersistence = new FakeRestaurantOwnersPersistenceFacade();
} else {
  // add here the real persistence later
  ownersPersistence = new FakeRestaurantOwnersPersistenceFacade();
}

const restaurantOwnersGateway: IRestaurantOwnersGateway = new RestaurantOwnersGateway(
  ownersPersistence
);

export { restaurantOwnersGateway, ownersPersistence };
