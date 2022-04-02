import { expect } from "chai";

import { getRestaurantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/RestaurantsService/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/AuthService/RegisterFactory";

import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { FakeCloudGateway } from "../../src/Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistanceFacade";

import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/PasswordManager";

import { SearchForRestaurantFactory } from "../../src/UseCases/RestaurantsService/SearchForRestaurantFactory";

const passwordManager = new FakePasswordManager();

const ownersPersistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsPersistence = new FakeRestaurantPersistence();

const ownersGateway = new RestaurantOwnersGateway(ownersPersistence);
const restaurantsGateway = new RestaurantsGateway(restaurantsPersistence);
const cloudGateway = new FakeCloudGateway();

const registerFactory = new RegisterFactory(ownersGateway, passwordManager, tokenManager);
const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway,
  cloudGateway
);
const searchForRestaurantFactory = new SearchForRestaurantFactory(restaurantsGateway);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getRestaurantInfo();

let authToken: string;

describe("Searching for Restaurant use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  afterEach(() => {
    restaurantsPersistence.deleteAll();
  });

  after(() => {
    ownersPersistence.deleteAll();
  });

  it("should return empty array when no restaurant is found", async () => {
    const result = await searchForRestaurantFactory.searchFor("not exsit");
    expect(result).to.be.empty;
  });

  it("Should return restaurants that have a name match the search keyword", async () => {
    restaurantInfo.restaurantId = "";

    restaurantInfo.name = "a";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    restaurantInfo.name = "aa";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    restaurantInfo.name = "a&a";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    const result = await searchForRestaurantFactory.searchFor("a");
    expect(result).to.have.lengthOf(3);
  });
});
