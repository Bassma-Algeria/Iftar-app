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
    restaurantsPresistence.deleteAll();
    RestaurantsPersistence.deleteAll();
  });

  it("should return undefined when searching for non existing userId", async () => {
    const restaurant = await restaurantsGateway.getRestaurantById("nonExistingUserId");
    expect(restaurant).to.be.undefined;
  });
  it("should add restaurant and get it by id", async () => {
    restaurantInfo.ownerId = tokenManager.decode(authToken);
    await addRestaurantFactory.add({ restaurantInfo, authToken });
    const restaurant = await restaurantsGateway.getRestaurantById(restaurantInfo.restaurantId);
    expect(restaurant?.info()).to.deep.equal(restaurantInfo);
  });
  it("should add a restaurant and get it by name ", async () => {
    restaurantInfo.ownerId = tokenManager.decode(authToken);
    await addRestaurantFactory.add({ restaurantInfo, authToken });
    const restaurants = await restaurantsGateway.searchByName(restaurantInfo.name);
    expect(restaurants).to.have.lengthOf(1);
    expect(restaurants[0].info()).to.deep.equal(restaurantInfo);
  });
};

describe("RestaurantsGateway", () => {
  describe("Fake Restaurants Persistence", testHandler(new FakeRestaurantPersistence()));
});
