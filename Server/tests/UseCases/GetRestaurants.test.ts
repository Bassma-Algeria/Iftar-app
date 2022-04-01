import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { GetRestaurentsFactory } from "../../src/UseCases/GetRestaurants/GetRestaurantsFactory";
import { CloudGateway } from "../../src/Adapters/DrivenAdapters/Persistence/CloudGateway/CloudGateway";

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const passwordManager = new FakePasswordManager();
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const cloudGateway = new CloudGateway();
describe("Get Restaurants use case", () => {
  const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);

  const ownerInfo = getResturantOwnerInfo();
  let restaurantInfo = getResturantInfo();
  const addRestaurantFactory = new AddRestaurantFactory(
    tokenManager,
    restaurantsGateway_,
    cloudGateway
  );
  const getRestaurantsFactory = new GetRestaurentsFactory(restaurantsGateway_);

  let authToken: string;

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
