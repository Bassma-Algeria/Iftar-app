import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";

import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { FakeCloudGateway } from "../../src/Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";

import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { GetRestaurentsFactory } from "../../src/UseCases/GetRestaurants/GetRestaurantsFactory";

const passwordManager = new FakePasswordManager();

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();

const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const cloudGateway = new FakeCloudGateway();

const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);
const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway_,
  cloudGateway
);
const getRestaurantsFactory = new GetRestaurentsFactory(restaurantsGateway_);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getResturantInfo();

let authToken: string;

describe("Get Restaurants use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  it("Should return all restaurants", async () => {
    restaurantInfo.restaurantId = "";
    await addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "restaurant1" },
    });
    await addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "restaurant2" },
    });
    await addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "restaurant3" },
    });
    const result = await getRestaurantsFactory.getAll();
    expect(result).to.have.lengthOf(3);
  });
});
