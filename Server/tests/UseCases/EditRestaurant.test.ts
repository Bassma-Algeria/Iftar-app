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
import { EditRestaurentsFactory } from "../../src/UseCases/EditRestaurant/EditRestaurantFactory";

const restaurantsPresistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsGateway = new RestaurantOwnersGateway(restaurantsPresistence);
const passwordManager = new FakePasswordManager();
const restaurantsGateway_ = new RestaurantsGateway(new FakeRestaurantPersistence());
const editRestaurantFactory = new EditRestaurentsFactory(restaurantsGateway_);
describe("Edit restaurant use case", () => {
  const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);

  const ownerInfo = getResturantOwnerInfo();
  let restaurantInfo = getResturantInfo();
  const addRestaurantFactory = new AddRestaurantFactory(tokenManager, restaurantsGateway_);

  let authToken: string;

  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });
  it("should update name by id", async () => {
    const restaurant = addRestaurantFactory.add({
      authToken,
      restaurantInfo: { ...restaurantInfo, name: "restaurant1" },
    });
    const updatedRestaurant = await editRestaurantFactory.updateName(
      restaurantInfo.restaurantId,
      "restaurant2"
    );
    expect(updatedRestaurant.info().name).to.equal("restaurant2");
  });
  it("Should be able to update coordinates and location name", async () => {
    const updatedRestaurant = await editRestaurantFactory.updateLocation(
      restaurantInfo.restaurantId,
      {
        latitude: 1,
        longitude: 1,
      },
      "locationName"
    );
    expect(updatedRestaurant.info().locationCoords.latitude).to.equal(1);
    expect(updatedRestaurant.info().locationCoords.longitude).to.equal(1);
    expect(updatedRestaurant.info().locationName).to.equal("locationName");
  });
});
