import "chai-exclude";
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
const restaurantInfo = getResturantInfo();

let authToken: string;

describe("Adding a Restaurant use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  it("should not be able to register a restaurant with an invalid token", async () => {
    await expect(addRestaurantFactory.add({ authToken: "", restaurantInfo })).to.be.rejected;
    await expect(addRestaurantFactory.add({ authToken: "invalid", restaurantInfo })).to.be.rejected;
  });

  it("should not be able to register with invalid values", async () => {
    let info = { ...restaurantInfo, name: "" };
    await expect(addRestaurantFactory.add({ authToken, restaurantInfo: info })).to.be.rejected;

    info = { ...restaurantInfo, ownerName: "" };
    await expect(addRestaurantFactory.add({ authToken, restaurantInfo: info })).to.be.rejected;

    info = { ...restaurantInfo, locationName: "" };
    await expect(addRestaurantFactory.add({ authToken, restaurantInfo: info })).to.be.rejected;
  });

  it("should not be able to register a restaurant with wrong working time", async () => {
    let info = {
      ...restaurantInfo,
      openingTime: { hour: 10, minute: 0 },
      closingTime: { hour: 9, minute: 0 },
    };

    await expect(addRestaurantFactory.add({ authToken, restaurantInfo: info })).to.be.rejected;
  });

  it("Should register the restaurent when all inputs are valid", async () => {
    await addRestaurantFactory.add({ authToken, restaurantInfo });
    const searchResultRestaurant = await searchRestaurantFactory.search(restaurantInfo.name);

    expect(searchResultRestaurant).have.lengthOf(1);
    expect(searchResultRestaurant[0])
      .excluding("pictures")
      .to.deep.equal({ ...restaurantInfo, ownerId: tokenManager.decode(authToken) });
    expect(searchResultRestaurant[0].pictures.length).to.equal(restaurantInfo.pictures.length);
  });
});
