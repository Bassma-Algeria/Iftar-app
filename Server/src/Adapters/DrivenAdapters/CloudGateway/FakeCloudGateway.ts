import faker from "faker";

import { ICloudGateway } from "../../../Ports/DrivenPorts/CloudGateway/CloudGateway.interface";

export class FakeCloudGateway implements ICloudGateway {
  public async uploadImage(image: any): Promise<string> {
    return faker.internet.url();
  }

  public async deleteImageWithUrl(image: string): Promise<void> {
    return;
  }
}
