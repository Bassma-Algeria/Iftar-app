/**
 * 1 - should not have a user with an invalid email
 */

import { expect } from "chai";
import { FakeIdGenerator } from "../../src/Adapters/DrivenAdapters/IdGenerator/FakeIdGenerator";

import { makeRestaurantOwner } from "../../src/Domain/RestaurantOwner/RestaurantOwnerFactory";

describe("RestaurantOwner Entity", () => {
  const ownerInfo = { email: "email@gmai.com  ", password: "  somePassword" };

  const RestaurantOwner = makeRestaurantOwner(new FakeIdGenerator());

  it("should not have a RestaurantOwner with an invalid email", () => {
    ["invalidEmail 1", "email@.com", "someEmail@gmail"].map((email) => {
      expect(() => new RestaurantOwner(email, "somePassword")).to.throw();
    });
  });

  it("should have a RestaurantOwner with an emtpy password", () => {
    expect(() => new RestaurantOwner("valid@email.com", "")).to.throw();
  });

  it("new created RestaurantOwner should have a unique id, and a time of creation", () => {
    const owner1 = new RestaurantOwner(ownerInfo.email, ownerInfo.password);
    const owner2 = new RestaurantOwner(ownerInfo.email, ownerInfo.password);

    expect(owner1.ownerId).to.be.a("string").and.to.not.equal(owner2.ownerId);
    expect(owner1.createdAt).to.be.a("Date");
  });

  it("email and password should be trimed, and lowercase the email", () => {
    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);

    expect(owner.email).to.equal(ownerInfo.email.toLocaleLowerCase().trim());
    expect(owner.password).to.equal(ownerInfo.password.trim());
  });

  it("should not be able to get properties that are not set yet", () => {
    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);

    expect(() => owner.phoneNumber).to.throw();
  });

  it("should be able to retreive the owner data from the entity", () => {
    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);
    owner.phoneNumber = "0728129301";

    const ownerData = owner.info();

    expect(ownerData.ownerId).to.equal(owner.ownerId);
    expect(ownerData.email).to.equal(owner.email);
    expect(ownerData.password).to.equal(owner.password);
    expect(ownerData.phoneNumber).to.equal(owner.phoneNumber);
    expect(ownerData.createdAt).to.equal(owner.createdAt);
  });

  it("Optional phone number should not be invalid", () => {
    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);

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
