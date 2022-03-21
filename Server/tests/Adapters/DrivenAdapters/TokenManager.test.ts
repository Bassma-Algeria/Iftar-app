import { expect } from "chai";
import { FakeTokenManager } from "../../../src/Adapters/DrivenAdapters/TokenManager/FakeTokenManager";

describe("TokenManager", () => {
  const tokenManager = new FakeTokenManager();

  it("should generate a unique Bearer token for each given key", () => {
    const key1 = "someKey1";
    const key2 = "someKey2";

    expect(tokenManager.generateToken(key1)).to.include("Bearer ");

    expect(tokenManager.generateToken(key1)).to.not.equal(tokenManager.generateToken(key2));
    expect(tokenManager.generateToken(key1)).to.equal(tokenManager.generateToken(key1));
  });
});
