import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { SearchRestaurentFactory } from "../../src/UseCases/SearchForRestaurant/SearchRestaurantFactory";

import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { CloudGateway } from "../../src/Adapters/DrivenAdapters/Persistence/CloudGateway/CloudGateway";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";

import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
/**
 * search by region
 */
const passwordManager = new FakePasswordManager();

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();

const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const cloudGateway = new CloudGateway();

const searchRestaurantFactory = new SearchRestaurentFactory(restaurantsGateway_);
const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);
const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway_,
  cloudGateway
);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getResturantInfo();

let authToken: string;

describe("Searching for Restaurant use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  it("should return empty array when no restaurant is found", async () => {
    const result = await searchRestaurantFactory.search("");
    expect(result).to.be.empty;
  });

  it("Should return restaurants by key word", async () => {
    restaurantInfo.restaurantId = "";
    await addRestaurantFactory.add({ authToken, restaurantInfo: { ...restaurantInfo, name: "a" } });
    await addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "aa" },
    });
    await addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "aaa" },
    });
    const result = await searchRestaurantFactory.search("a");
    expect(result).to.have.lengthOf(3);
  });
});
