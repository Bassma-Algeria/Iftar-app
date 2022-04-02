export interface ICloudGateway {
  uploadImage(image: any): Promise<string>;
  deleteImageWithUrl(image: string): Promise<void>;
}
