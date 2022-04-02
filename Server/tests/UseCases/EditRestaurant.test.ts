import Sinon from "sinon";
import { expect } from "chai";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

import { AddRestaurantFactory } from "../../src/UseCases/AddRestaurant/AddRestaurantFactory";
import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";
import { EditRestaurentsFactory } from "../../src/UseCases/EditRestaurant/EditRestaurantFactory";

import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { RestaurantsGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/RestaurantsGateway";
import { FakeCloudGateway } from "../../src/Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { FakeRestaurantPersistence } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantsGateway/FakeRestaurantPersistance";

import { tokenManager } from "../../src/Ports/DrivenPorts/TokenManager/TokenManager";
import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/FakePasswordManager";
import { GetRestaurentsFactory } from "../../src/UseCases/GetRestaurants/GetRestaurantsFactory";

const passwordManager = new FakePasswordManager();

const ownersPresistence = new FakeRestaurantOwnersPersistenceFacade();
const restaurantsPresistence = new FakeRestaurantPersistence();

const ownersGateway = new RestaurantOwnersGateway(ownersPresistence);
const restaurantsGateway = new RestaurantsGateway(restaurantsPresistence);
const cloudGateway = new FakeCloudGateway();

const registerFactory = new RegisterFactory(ownersGateway, passwordManager, tokenManager);
const getRestaurantFacory = new GetRestaurentsFactory(restaurantsGateway);
const editRestaurantFactory = new EditRestaurentsFactory(
  restaurantsGateway,
  cloudGateway,
  tokenManager
);
const addRestaurantFactory = new AddRestaurantFactory(
  tokenManager,
  restaurantsGateway,
  cloudGateway
);

const ownerInfo = getResturantOwnerInfo();
let restaurantInfo = getResturantInfo();

let authToken: string;

describe("Edit restaurant use case", () => {
  before(async () => {
    const confirmPassword = ownerInfo.password;
    authToken = await registerFactory.register({ ...ownerInfo, confirmPassword });
  });

  afterEach(() => {
    restaurantsPresistence.deleteAll();
  });

  after(() => {
    ownersPresistence.deleteAll();
  });

  it("should not be able to edit a restaurant with an invalid token", async () => {
    const authToken = "invalidToken";
    await expect(editRestaurantFactory.update({ authToken, newRestaurantInfo: restaurantInfo })).to
      .be.rejected;
  });

  it("only the owner of the restaurant can edit it", async () => {
    const anotherOwner = getResturantOwnerInfo();
    const confirmPassword = anotherOwner.password;
    const anotherToken = await registerFactory.register({ ...anotherOwner, confirmPassword });

    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });
    restaurant.name = "anothername";

    await expect(
      editRestaurantFactory.update({ authToken: anotherToken, newRestaurantInfo: restaurant })
    ).to.be.rejected;
  });

  it("should not be able to edit a non exsiting restaurant", async () => {
    await expect(editRestaurantFactory.update({ authToken, newRestaurantInfo: restaurantInfo })).to
      .be.rejected;
  });

  it("should update the restaurant info when everythink is ok", async () => {
    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });

    const newRestaurantInfo = { ...restaurant };
    newRestaurantInfo.name = "anotherName";
    newRestaurantInfo.ownerName = "another name";
    newRestaurantInfo.workingTime = {
      opening: { hour: 18, minute: 0 },
      closing: { hour: 20, minute: 0 },
    };

    await editRestaurantFactory.update({ authToken, newRestaurantInfo });
    const updatedRestaurant = await getRestaurantFacory.getById(restaurant.restaurantId);

    expect(updatedRestaurant).to.deep.equal(newRestaurantInfo);
  });

  it("should not have the old restaurant pictures when no one of them exist in the upadated restaurant information", async () => {
    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });

    const newRestaurantInfo = { ...restaurant };
    newRestaurantInfo.pictures = [];

    await editRestaurantFactory.update({ authToken, newRestaurantInfo });
    const updatedRestaurant = await getRestaurantFacory.getById(restaurant.restaurantId);

    expect(updatedRestaurant?.pictures).be.an.empty("array");
  });

  it("should upload and save the new pictures when they are provided", async () => {
    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });

    const newRestaurantInfo: any = { ...restaurant };
    newRestaurantInfo.pictures = [{}, {}];

    await editRestaurantFactory.update({ authToken, newRestaurantInfo });
    const updatedRestaurant = await getRestaurantFacory.getById(restaurant.restaurantId);

    expect(updatedRestaurant?.pictures)
      .be.an("array")
      .and.have.lengthOf(2)
      .and.not.deep.equal(restaurant.pictures);
  });

  it("should merge the picture when adding new once and keeping some of the old ones", async () => {
    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });

    const newRestaurantInfo: any = { ...restaurant };
    newRestaurantInfo.pictures = [...restaurant.pictures.slice(0, 2), {}, {}];

    await editRestaurantFactory.update({ authToken, newRestaurantInfo });
    const updatedRestaurant = await getRestaurantFacory.getById(restaurant.restaurantId);

    expect(updatedRestaurant?.pictures).be.an("array").and.have.lengthOf(4);
    expect(updatedRestaurant?.pictures).to.not.deep.equal(restaurant.pictures);
    expect(updatedRestaurant?.pictures).to.include(restaurant.pictures[0]);
    expect(updatedRestaurant?.pictures).to.include(restaurant.pictures[1]);
  });

  it("should delete the pictures from the cloud we don't need anymore", async () => {
    const deletePicSpy = Sinon.spy(cloudGateway, "deleteImageWithUrl");

    const restaurant = await addRestaurantFactory.add({ authToken, restaurantInfo });

    const newRestaurantInfo: any = { ...restaurant };
    newRestaurantInfo.pictures = [restaurant.pictures[0]];

    await editRestaurantFactory.update({ authToken, newRestaurantInfo });
    const updatedRestaurant = await getRestaurantFacory.getById(restaurant.restaurantId);

    expect(updatedRestaurant?.pictures).be.an("array").and.have.lengthOf(1);
    expect(deletePicSpy.callCount).to.equal(restaurantInfo.pictures.length - 1);

    restaurant.pictures.forEach((url, index) => {
      if (index == 0) return;
      expect(deletePicSpy.calledWith(url)).to.be.true;
    });
  });
});
