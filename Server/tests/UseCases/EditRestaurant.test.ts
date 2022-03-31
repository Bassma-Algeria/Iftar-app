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
  it("should update restaurant info", async () => {
    const restaurant = addRestaurantFactory.add({
      authToken,
      restaurantInfo: {
        ...restaurantInfo,
        name: "restaurant1",
        ownerName: "owner1",
        locationCoords: {
          latitude: 1,
          longitude: 1,
        },
        closingTime: {
          hour: 10,
          minute: 10,
        },
        openingTime: {
          hour: 9,
          minute: 0,
        },
      },
    });
    const updatedRestaurant = await editRestaurantFactory.update({
      restaurantId: restaurantInfo.restaurantId,
      name: "restaurant2",
      ownerName: "owner2",
      locationCoords: {
        latitude: 10,
        longitude: 10,
      },
      closingTime: {
        hour: 20,
        minute: 10,
      },
      openingTime: {
        hour: 19,
        minute: 0,
      },
    });
    expect(updatedRestaurant?.info().name).to.equal("restaurant2");
    expect(updatedRestaurant?.info().ownerName).to.equal("owner2");
    expect(updatedRestaurant?.info().locationCoords).to.deep.equal({
      latitude: 10,
      longitude: 10,
    });
    expect(updatedRestaurant?.info().closingTime).to.deep.equal({
      hour: 20,
      minute: 10,
    });
    expect(updatedRestaurant?.info().openingTime).to.deep.equal({
      hour: 19,
      minute: 0,
    });
  });
});
