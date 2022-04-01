import { ICloudGateway } from "../../../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";

export class CloudGateway implements ICloudGateway {
  public async uploadImages(images: any[]): Promise<string[]> {
    return images.map(() => "https://www.google.com");
  }

  public async deleteImage(image: string): Promise<void> {
    return;
  }
}
