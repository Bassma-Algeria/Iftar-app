import { expect } from "chai";
import { FakeIdGenerator } from "../../src/Adapters/DrivenAdapters/IdGenerator/FakeIdGenerator";

import { makeRestaurantOwner } from "../../src/Domain/RestaurantOwner/RestaurantOwnerFactory";

import { getResturantOwnerInfo } from "../_Fakes_/RestaurantOwnerInfo";

describe("RestaurantOwner Entity", () => {
  const ownerInfo = getResturantOwnerInfo();

  const RestaurantOwner = makeRestaurantOwner(new FakeIdGenerator());

  it("should not have a RestaurantOwner with an invalid email", () => {
    ["invalidEmail 1", "email@.com", "someEmail@gmail"].map((email) => {
      expect(() => new RestaurantOwner({ ...ownerInfo, email })).to.throw();
    });
  });

  it("should have a RestaurantOwner with an emtpy password", () => {
    expect(
      () => new RestaurantOwner({ ...ownerInfo, password: "" })
    ).to.throw();
  });

  it("should set the ownerId to an emtpy string", () => {
    const owner = new RestaurantOwner(ownerInfo);
    expect(() => (owner.ownerId = "")).to.throw();
  });

  it("email and password should be trimed, and lowercase the email", () => {
    const owner = new RestaurantOwner(ownerInfo);

    expect(owner.email).to.equal(ownerInfo.email.toLocaleLowerCase().trim());
    expect(owner.password).to.equal(ownerInfo.password.trim());
  });

  it("new created restaurantOwners should have the information passed to the contstructor ", () => {
    const owner = new RestaurantOwner(ownerInfo);
    expect(owner.info()).to.deep.equal(ownerInfo);
  });

  it("new created restaurantOwners should have some default properties when we didn't pass all them in the contructor (generate a creation time, and a unique id)", () => {
    const owner1 = new RestaurantOwner({
      email: ownerInfo.email,
      password: ownerInfo.password,
    });
    const owner2 = new RestaurantOwner({
      email: ownerInfo.email,
      password: ownerInfo.password,
    });

    expect(owner1.ownerId).to.be.a("string").and.to.not.equal(owner2.ownerId);
    expect(owner1.createdAt).to.be.a("Date");
  });

  it("should not be able to get properties that are not set yet", () => {
    const owner = new RestaurantOwner({ ...ownerInfo, phoneNumber: undefined });

    expect(() => owner.phoneNumber).to.throw();
  });

  it("should be able to retreive the owner data from the entity", () => {
    const owner = new RestaurantOwner(ownerInfo);
    expect(owner.info()).to.deep.equal(ownerInfo);
  });

  it("should not be able to put a wrong phone number", () => {
    const owner = new RestaurantOwner(ownerInfo);

    ["invalidNumber", "098778687", "076655"].map((number) => {
      expect(() => (owner.phoneNumber = number)).to.throw();
    });

    ["05 40 39 28 12", "0771 29 20 10", "078919 29 19", "078 827 1020"].map(
      (number) => {
        expect(() => (owner.phoneNumber = number)).to.not.throw();
      }
    );
  });
});