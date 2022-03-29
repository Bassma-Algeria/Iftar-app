import { expect } from "chai";
import { FakePasswordManager } from "../../../src/Adapters/DrivenAdapters/FakePasswordManager";

describe("PasswordManager", () => {
  const passwordManager = new FakePasswordManager();

  it("should hash the given password", async () => {
    const password = "somePassword";
    await expect(passwordManager.hash(password)).to.eventually.not.equal(password);
  });

  it("same password should have the same hash", async () => {
    const password = "somePassword";

    const hash1 = await passwordManager.hash(password);
    const hash2 = await passwordManager.hash(password);

    expect(hash1).to.equal(hash2);
  });

  it("should check if the hashed password match the literal or not", async () => {
    const literalPassword = "somePassword";
    const hash = await passwordManager.hash(literalPassword);

    await expect(passwordManager.isMatch(literalPassword, hash)).to.eventually.be.true;
    await expect(passwordManager.isMatch("anotherPass", hash)).to.eventually.be.false;
  });
});
