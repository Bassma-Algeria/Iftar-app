import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

/**
 * closing time should be after opening time;
 * pictures are optional;
 */

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const passwordManager = new FakePasswordManager();

describe("Adding a Restaurant use case", () => {
  const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);

  const ownerInfo = getResturantOwnerInfo();
  const restaurantInfo = getResturantInfo();
  const addRestaurantFactory = new AddRestaurantFactory(tokenManager);

  let authToken: string;

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
});
