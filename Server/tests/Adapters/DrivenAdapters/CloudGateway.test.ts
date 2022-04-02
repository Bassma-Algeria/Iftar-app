import { expect } from "chai";
import { FakeCloudGateway } from "../../../src/Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";

describe("Cloud Gateway", () => {
  const cloudGateway = new FakeCloudGateway();

  it("should take an image and return an url", async () => {
    const result = await cloudGateway.uploadImage({});
    expect(result).to.be.a.string;
  });
});
