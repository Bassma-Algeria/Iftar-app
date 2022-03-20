import { expect } from "chai";

import {
  IRestaurantOwnersPersistenceFacade,
  RestaurantOwnersGateway,
} from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeRestaurantOwnersPersistenceFacade } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";

import { RestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwner";
import { IRestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwnerFactory";

import { getResturantOwnerInfo } from "../../../_Fakes_/RestaurantOwnerInfo";

const testHandler =
  (ownersPersistence: IRestaurantOwnersPersistenceFacade) => () => {
    const ownerInfo = getResturantOwnerInfo();

    let owner: IRestaurantOwner;
    const ownersGateway = new RestaurantOwnersGateway(ownersPersistence);

    beforeEach(() => {
      owner = new RestaurantOwner(ownerInfo);
    });

    afterEach(() => {
      ownersPersistence.deleteAll();
    });

    it("should return undefined when tryig to get an owner with an email not exist", async () => {
      const owner = await ownersGateway.getByEmail(ownerInfo.email);

      expect(owner).to.be.undefined;
    });

    it("should add an owner and get him per email", async () => {
      await ownersGateway.save(owner);
      const returnedOwner = await ownersGateway.getByEmail(ownerInfo.email);

      expect(returnedOwner?.info()).to.deep.equal(ownerInfo);
    });
  };

describe("RestaurantOwnersGateway", () => {
  describe(
    "Fake Persistence",
    testHandler(new FakeRestaurantOwnersPersistenceFacade())
  );
});
