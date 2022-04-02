import { ICloudGateway } from "../../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";
import faker from "faker";

export class FakeCloudGateway implements ICloudGateway {
  public async uploadImage(image: any): Promise<string> {
    return faker.internet.url();
  }

  public async deleteImageWithUrl(image: string): Promise<void> {
    return;
  }
}
