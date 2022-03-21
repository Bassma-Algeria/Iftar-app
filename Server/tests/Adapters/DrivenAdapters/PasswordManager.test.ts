import { expect } from "chai";
import { FakePasswordManager } from "../../../src/Adapters/DrivenAdapters/PasswordManager/FakePasswordManager";

describe("PasswordManager", () => {
  const passwordManager = new FakePasswordManager();

  it("should hash the given password", async () => {
    const password = "somePassword";
    await expect(passwordManager.hash(password)).to.eventually.not.equal(
      password
    );
  });

  it("same password should have the same hash", async () => {
    const password = "somePassword";

    const hash1 = await passwordManager.hash(password);
    const hash2 = await passwordManager.hash(password);

    expect(hash1).to.equal(hash2);
  });
});
