import chai, { expect, should } from "chai";
import chaiAsPromised from "chai-as-promised";

import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";

import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";

chai.use(chaiAsPromised);

/**
 * 6 - phone number should not be used more than two times
 * 7 - when the values are correct, register the user and return a token
 */

describe("Register UseCase", () => {
  const validInfo = {
    email: "invalidEmail@gmail.com",
    password: "somePassword",
    confirmPassword: "somePassword",
    phoneNumber: "0787327720",
  };

  const registerFactory = new RegisterFactory(
    new RestaurantOwnersGateway(new FakeRestaurantOwnersPersistenceFacade())
  );

  it("Restaurant Owner cannot register with an invalid email", async () => {
    await expect(
      registerFactory.register({ ...validInfo, email: "invalidEmail" })
    ).to.be.rejected;
  });

  it("Restaurant Owner cannot register with an empty password", async () => {
    await expect(registerFactory.register({ ...validInfo, password: "" })).to.be
      .rejected;
  });

  it("The confirmPassword should equal the Password", async () => {
    await expect(
      registerFactory.register({
        ...validInfo,
        confirmPassword: "anotherPassword",
      })
    ).to.be.rejected;
  });

  it("Restaurant Owner cannot register with an invalid phone number", async () => {
    await expect(
      registerFactory.register({ ...validInfo, phoneNumber: "invalid" })
    ).to.be.rejected;
  });

  it("new Restaurnt Owner should not be able to register with an existing email", async () => {
    await registerFactory.register(validInfo);
    await expect(registerFactory.register(validInfo)).to.be.rejected;
  });
});
