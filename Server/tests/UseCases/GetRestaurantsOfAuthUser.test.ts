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

describe("Get Restaurants of the auth owner use case", () => {
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

  it("should return an empty array when the owner didn't add any restaurant", async () => {
    await expect(getRestaurantsFactory.getRestaurantsOfAuthOwner(authToken)).to.eventually.be.empty;
  });

  it("Should return all the restaurants that the owner have", async () => {
    restaurantInfo.restaurantId = "";

    await addRestaurantFactory.add({ authToken, restaurantInfo });
    await addRestaurantFactory.add({ authToken, restaurantInfo });
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    const result = await getRestaurantsFactory.getRestaurantsOfAuthOwner(authToken);
    expect(result).to.have.lengthOf(3);
  });

  it("should not get other restaurants rather than the restaurant that the owner have", async () => {
    const ownerInfo = getResturantOwnerInfo();
    const confirmPassword = ownerInfo.password;
    const anotherToken = await registerFactory.register({ ...ownerInfo, confirmPassword });

    await addRestaurantFactory.add({ authToken, restaurantInfo });
    await addRestaurantFactory.add({ authToken, restaurantInfo });
    await addRestaurantFactory.add({ authToken, restaurantInfo });

    await addRestaurantFactory.add({ authToken: anotherToken, restaurantInfo });
    await addRestaurantFactory.add({ authToken: anotherToken, restaurantInfo });

    await expect(
      getRestaurantsFactory.getRestaurantsOfAuthOwner(authToken)
    ).to.eventually.have.lengthOf(3);

    await expect(
      getRestaurantsFactory.getRestaurantsOfAuthOwner(anotherToken)
    ).to.eventually.have.lengthOf(2);
  });
});
