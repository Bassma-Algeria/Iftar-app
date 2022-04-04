import { expect } from "chai";

import {
  IRestaurantOwnersPersistenceFacade,
  RestaurantOwnersGateway,
} from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeRestaurantOwnersPersistenceFacade } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnersPersistenceFacade/FakeRestaurantOwnersPersistenceFacade";
import { MongoRestaurantOwnersPersistenceFacade } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnersPersistenceFacade/MongoRestaurantOwnersPersistenceFacade";
import { connectToMongo } from "../../../../src/Adapters/DrivenAdapters/Persistence/_SETUP_/MongoDB";

import { RestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwner";
import { IRestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwnerFactory";

import { getResturantOwnerInfo } from "../../../_Fakes_/RestaurantOwnerInfo";

const testHandler = (ownersPersistence: IRestaurantOwnersPersistenceFacade) => () => {
  const ownerInfo = getResturantOwnerInfo();

  let owner: IRestaurantOwner;
  const ownersGateway = new RestaurantOwnersGateway(ownersPersistence);

  beforeEach(() => {
    owner = new RestaurantOwner(ownerInfo);
  });

  afterEach(async () => {
    await ownersPersistence.deleteAll();
  });

  it("should return undefined when tryig to get an owner with an email not exist", async () => {
    const owner = await ownersGateway.getByEmail(ownerInfo.email);

    expect(owner).to.be.undefined;
  });

  it("should add an owner and get him per email", async () => {
    await ownersGateway.save(owner);
    const returnedOwner = await ownersGateway.getByEmail(ownerInfo.email);

    ownerInfo.phoneNumber = ownerInfo.phoneNumber.replace(/ /g, "");
    expect(returnedOwner?.info()).to.deep.equal(ownerInfo);
  });

  it("should add an owner and get him per phone number", async () => {
    await ownersGateway.save(owner);
    const returnedOwner = await ownersGateway.getByPhone(ownerInfo.phoneNumber);

    ownerInfo.phoneNumber = ownerInfo.phoneNumber.replace(/ /g, "");
    expect(returnedOwner?.info()).to.deep.equal(ownerInfo);
  });
};

describe("RestaurantOwnersGateway", () => {
  describe("Fake Persistence", testHandler(new FakeRestaurantOwnersPersistenceFacade()));

  describe("MongoDB Persistence", () => {
    let mongoDB: any;

    before(async () => (mongoDB = await connectToMongo()));
    after(async () => await mongoDB.disconnect());

    describe("", testHandler(new MongoRestaurantOwnersPersistenceFacade()));
  });
});
