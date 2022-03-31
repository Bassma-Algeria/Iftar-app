import { expect } from "chai";

import { getResturantOwnerInfo } from "../../../_Fakes_/RestaurantOwnerInfo";
import {
  IRestaurantPersistance,
  RestaurantsGateway,
} from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { getResturantInfo } from "../../../_Fakes_/RestaurantInfo";
import { Restaurant } from "../../../../src/Domain/Restaurant/Restaurant";
import { FakeRestaurantPersistence } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";
import { RegisterFactory } from "../../../../src/UseCases/Register/RegisterFactory";
import { FakePasswordManager } from "../../../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { RestaurantOwnersGateway } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { tokenManager } from "../../../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakeRestaurantOwnersPersistenceFacade } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { AddRestaurantFactory } from "../../../../src/UseCases/AddRestaurant/AddRestaurantFactory";

const testHandler = (RestaurantsPersistence: IRestaurantPersistance) => () => {
  const ownerInfo = getResturantOwnerInfo();
  const restaurantInfo = getResturantInfo();
  const restaurantsGateway = new RestaurantsGateway(RestaurantsPersistence);
  const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();
  const restaurantsGateway_ = new RestaurantOwnersGateway(restaurantsPresistence);
  const passwordManager = new FakePasswordManager();
  const addRestaurantFactory = new AddRestaurantFactory(tokenManager, restaurantsGateway);

  const registerFactory = new RegisterFactory(restaurantsGateway_, passwordManager, tokenManager);
  let authToken: string;
  beforeEach(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  afterEach(() => {
    RestaurantsPersistence.deleteAll();
  });
};

describe("RestaurantsGateway", () => {
  describe("Fake Restaurants Persistence", testHandler(new FakeRestaurantPersistence()));
});
