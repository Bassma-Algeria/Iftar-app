import { expect } from "chai";
import { CloudGateway } from "../../../../src/Adapters/DrivenAdapters/Persistence/CloudGateway/CloudGateway";

const cloudGateway = new CloudGateway();

describe("Cloud Gateway", () => {
  it("should take an array of any (images) and return an array of strings (urls)", async () => {
    const images = ["image1", "image2", "image3"];
    const result = await cloudGateway.uploadImages(images);
    expect(result).to.have.lengthOf(3);
  });
});
