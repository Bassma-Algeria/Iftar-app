export interface ICloudGateway {
  uploadImage(image: string): Promise<string>; //image in base64
  deleteImageWithUrl(image: string): Promise<void>;
}
