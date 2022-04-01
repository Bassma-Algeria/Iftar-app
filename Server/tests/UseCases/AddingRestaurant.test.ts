import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";
import { SearchRestaurentFactory } from "../../src/UseCases/SearchForRestaurant/SearchRestaurantFactory";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { CloudGateway } from "../../src/Adapters/DrivenAdapters/Persistence/CloudGateway/CloudGateway";

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const passwordManager = new FakePasswordManager();
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const searchRestaurantFactory = new SearchRestaurentFactory(restaurantsGateway_);
const cloudGateway = new CloudGateway();
describe("Adding a Restaurant use case", () => {
  const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);

  const ownerInfo = getResturantOwnerInfo();
  const restaurantInfo = getResturantInfo();
  const addRestaurantFactory = new AddRestaurantFactory(
    tokenManager,
    restaurantsGateway_,
    cloudGateway
  );

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

    await expect(searchRestaurantFactory.search(restaurantInfo.name))
      .to.eventually.have.lengthOf(1)
      .and.deep.equal([
        {
          ...restaurantInfo,
          ownerId: tokenManager.decode(authToken),
          pictures: ["https://www.google.com", "https://www.google.com", "https://www.google.com"],
        },
      ]);
  });
});
