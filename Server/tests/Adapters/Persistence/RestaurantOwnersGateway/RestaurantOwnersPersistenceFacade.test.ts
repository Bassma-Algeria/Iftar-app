import { expect } from "chai";
import faker from "faker";

import { FakeRestaurantOwnersPersistenceFacade } from "../../../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";

describe("RestaurantOnwersPersistence", () => {
  const ownerInfo = {
    createdAt: faker.date.past(),
    email: faker.internet.email().toLocaleLowerCase(),
    ownerId: faker.datatype.uuid(),
    password: faker.internet.password(),
    phoneNumber: "0798818299",
  };

  const ownersPersistence = new FakeRestaurantOwnersPersistenceFacade();

  it("should add an owner and get it by email", async () => {
    await ownersPersistence.save(ownerInfo);
    const info = await ownersPersistence.getByEmail(ownerInfo.email);

    expect(info).to.deep.equal(ownerInfo);
  });
});
