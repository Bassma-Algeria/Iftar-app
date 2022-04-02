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
import { GetRestaurentsFactory } from "../../src/UseCases/RestaurantsService/GetRestaurantsFactory";

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
const getRestaurantsFactory = new GetRestaurentsFactory(restaurantsGateway);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getRestaurantInfo();

let authToken: string;

describe("Get Restaurants use case", () => {
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

  it("should return an empty array when no restaurants exsit", async () => {
    await expect(getRestaurantsFactory.getAll()).to.eventually.be.empty;
  });

  it("Should return all the existing restaurants", async () => {
    restaurantInfo.restaurantId = "";

    restaurantInfo.name = "restaurant1";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    restaurantInfo.name = "restaurant2";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    restaurantInfo.name = "restaurant3";
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    const result = await getRestaurantsFactory.getAll();
    expect(result).to.have.lengthOf(3);
  });
});
