import { expect } from "chai";

import { FakePasswordManager } from "../../src/Adapters/DrivenAdapters/PasswordManager/FakePasswordManager";
import { FakeRestaurantOwnersPersistenceFacade } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/FakeRestaurantOwnersPersistenceFacade";
import { RestaurantOwnersGateway } from "../../src/Adapters/DrivenAdapters/Persistence/RestaurantOwnersGateway/RestaurantOwnerGateway";
import { FakeTokenManager } from "../../src/Adapters/DrivenAdapters/TokenManager/FakeTokenManager";

import { RegisterFactory } from "../../src/UseCases/Register/RegisterFactory";

import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

describe("Register UseCase", () => {
  const userInfo = getResturantOwnerInfo();

  const registrationBody = { ...userInfo, confirmPassword: userInfo.password };

  const ownersPersistence = new FakeRestaurantOwnersPersistenceFacade();
  const registerFactory = new RegisterFactory(
    new RestaurantOwnersGateway(ownersPersistence),
    new FakePasswordManager(),
    new FakeTokenManager()
  );

  afterEach(() => {
    ownersPersistence.deleteAll();
  });

  it("Restaurant Owner cannot register with an invalid email", async () => {
    await expect(
      registerFactory.register({ ...registrationBody, email: "invalidEmail" })
    ).to.eventually.be.rejected.and.have.property("email");
  });

  it("Restaurant Owner cannot register with an empty password", async () => {
    await expect(
      registerFactory.register({ ...registrationBody, password: "" })
    ).to.eventually.be.rejected.and.have.property("password");
  });

  it("The confirmPassword should equal the Password", async () => {
    await expect(
      registerFactory.register({
        ...registrationBody,
        confirmPassword: "anotherPassword",
      })
    ).to.eventually.be.rejected.and.have.property("confirmPassword");
  });

  it("Restaurant Owner cannot register with an invalid phone number", async () => {
    await expect(
      registerFactory.register({ ...registrationBody, phoneNumber: "invalid" })
    ).to.eventually.be.rejected.and.have.property("phoneNumber");
  });

  it("new Restaurnt Owner should not be able to register with an existing email", async () => {
    await registerFactory.register(registrationBody);
    await expect(
      registerFactory.register(registrationBody)
    ).to.eventually.be.rejected.and.have.property("email");
  });

  it("new Restaurnt Owner should not be able to register with an existing phoneNumber", async () => {
    await registerFactory.register(registrationBody);
    await expect(
      registerFactory.register({
        ...registrationBody,
        email: "another@email.com",
      })
    ).to.eventually.be.rejected.and.have.property("phoneNumber");
  });

  it("should hash the password before saving the owner", async () => {
    await registerFactory.register(registrationBody);
    const savedOwner = await ownersPersistence.getByEmail(registrationBody.email);

    expect(savedOwner?.password).to.not.equal(registrationBody.password);
  });

  it("should return a unique token when everything is ok", async () => {
    const firstOwner = { email: "first@gmail.com", phoneNumber: "0798 98 09 75" };
    const secondOwner = { email: "second@gmail.com", phoneNumber: "0598 98 09 75" };

    const token1 = await registerFactory.register({ ...registrationBody, ...firstOwner });
    const token2 = await registerFactory.register({ ...registrationBody, ...secondOwner });

    expect(token1).to.include("Bearer ").and.not.equal(token2);
  });
});
