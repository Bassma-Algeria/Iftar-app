import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { GetRestaurentsFactory } from "../../src/UseCases/GetRestaurants/GetRestaurantsFactory";

import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { CloudGateway } from "../../src/Adapters/DrivenAdapters/Persistence/CloudGateway/CloudGateway";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";

import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";

const passwordManager = new FakePasswordManager();

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();

const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const cloudGateway = new CloudGateway();

const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway_,
  cloudGateway
);

const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);
const getRestaurantsFactory = new GetRestaurentsFactory(restaurantsGateway_);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getResturantInfo();

let authToken: string;

describe("Get Restaurants of an auth user use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  it("Should return restaurants that have the given owner id", async () => {
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
    const result = await getRestaurantsFactory.getRestaurantsByOwnerId(authToken);
    expect(result).to.have.lengthOf(3);
  });
});
