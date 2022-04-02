import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { EditRestaurentsFactory } from "../../src/UseCases/EditRestaurant/EditRestaurantFactory";

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

const registerFactory = new RegisterFactory(restaurantsGateway, passwordManager, tokenManager);
const editRestaurantFactory = new EditRestaurentsFactory(restaurantsGateway_, cloudGateway);
const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway_,
  cloudGateway
);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getResturantInfo();

let authToken: string;

describe.skip("Edit restaurant use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  it("should throw invalidToken error when an invalid token is provided", async () => {
    const invalidToken = "invalidToken";
    await expect(
      editRestaurantFactory.update({
        authToken: invalidToken,
        newRestaurantInfo: restaurantInfo,
      })
    ).to.be.rejected;
  });

  it("should not be able to edit restaurant if owner id does not match the new info ownerId", () => {
    restaurantInfo.ownerId = "some other id";
    expect(
      editRestaurantFactory.update({
        authToken,
        newRestaurantInfo: restaurantInfo,
      })
    ).to.eventually.be.rejectedWith("You are not the owner of this restaurant");
  });

  it("should update restaurant info", async () => {
    const restaurant = await addRestaurantFactory.add({
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
        pictures: ["image1", "image2", "image3"],
      },
    });
    const updatedRestaurant = await editRestaurantFactory.update({
      authToken,
      newRestaurantInfo: {
        restaurantId: restaurantInfo.restaurantId,
        locationName: "new location",
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
        pictures: [...restaurant.pictures, "image4", "image5", "image6"],
      },
    });
    expect(updatedRestaurant?.name).to.equal("restaurant2");
    expect(updatedRestaurant?.ownerName).to.equal("owner2");
    expect(updatedRestaurant?.locationCoords).to.deep.equal({
      latitude: 10,
      longitude: 10,
    });
    expect(updatedRestaurant?.closingTime).to.deep.equal({
      hour: 20,
      minute: 10,
    });
    expect(updatedRestaurant?.openingTime).to.deep.equal({
      hour: 19,
      minute: 0,
    });
    expect(updatedRestaurant?.pictures).to.have.lengthOf(6);
  });
});
