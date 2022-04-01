export interface ICloudGateway {
  uploadImages(images: any[]): Promise<string[]>;
  deleteImage(image: string): Promise<void>;
}
