import { expect } from "chai";
import { FakeCloudGateway } from "../../../src/Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";

describe("Cloud Gateway", () => {
  const cloudGateway = new FakeCloudGateway();

  it("should take an iamge and return an url", async () => {
    const image = {};
    const result = await cloudGateway.uploadImage(image);
    expect(result).to.be.a.string;
  });
});
