import { expect } from "chai";
import Sinon from "sinon";
import faker from "faker";

import { RestaurantOwnersGateway } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { IRestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwnerFactory";
import { RestaurantOwner } from "../../../../src/Domain/RestaurantOwner/RestaurantOwner";

describe("RestaurantOwnersGateway", () => {
  const ownerInfo: ReturnType<IRestaurantOwner["info"]> = {
    createdAt: faker.date.past(),
    email: faker.internet.email().toLocaleLowerCase(),
    ownerId: faker.datatype.uuid(),
    password: faker.internet.password(),
    phoneNumber: "0798818299",
  };

  const ownersPersistenceFacade: any = class {};
  const ownersGateway = new RestaurantOwnersGateway(
    new ownersPersistenceFacade()
  );

  it("should return undefined when the email not exist", async () => {
    ownersPersistenceFacade.prototype.getByEmail =
      Sinon.stub().resolves(undefined);

    const owner = await ownersGateway.getByEmail(ownerInfo.email);

    expect(owner).to.be.undefined;
  });

  it("should get the owner per email", async () => {
    ownersPersistenceFacade.prototype.getByEmail =
      Sinon.stub().resolves(ownerInfo);

    const owner = await ownersGateway.getByEmail(ownerInfo.email);

    expect(owner?.info()).to.deep.equal(ownerInfo);
  });

  it("should return undefined when the email not exist", async () => {
    ownersPersistenceFacade.prototype.save = Sinon.stub().resolves(ownerInfo);

    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);
    owner.createdAt = ownerInfo.createdAt;
    owner.ownerId = ownerInfo.ownerId;
    owner.phoneNumber = ownerInfo.phoneNumber;

    const returnedOwner = await ownersGateway.save(owner);

    expect(owner.info()).to.deep.equal(returnedOwner.info());
    expect(ownersPersistenceFacade.prototype.save.calledOnce).to.be.true;
  });
});
