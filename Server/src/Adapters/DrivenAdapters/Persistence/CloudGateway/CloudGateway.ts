import { ICloudGateway } from "../../../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";
import faker from "faker";

export class CloudGateway implements ICloudGateway {
  public async uploadImages(images: any[]): Promise<string[]> {
    return images.map(() => faker.image.imageUrl());
  }

  public async deleteImage(image: string): Promise<void> {
    return;
  }
}
