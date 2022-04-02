import type { ITokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager.interface";
import type { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import type { ICloudGateway } from "../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";

import { Restaurant } from "../../Domain/Restaurant/Restaurant";
import type { IRestaurant } from "../../Domain/Restaurant/RestaurantFactory";

import type { Args } from "./AddRestaurantFactory.types";

class AddRestaurantFactory {
  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly restaurantsGateway: IRestaurantsGateway,
    private readonly cloudGateway: ICloudGateway
  ) {}

  async add({ authToken, restaurantInfo }: Args) {
    const ownerId = this.decodeToken(authToken);

    const { pictures, ...rest } = restaurantInfo;
    const restaurant = new Restaurant({ ...rest, pictures: [], ownerId });

    const picturesUrls = await this.uploadPicsAndGetUrls(pictures);
    restaurant.pictures = picturesUrls;

    const savedRestaurant = await this.saveRestaurant(restaurant);
    return savedRestaurant.info();
  }

  private decodeToken(token: string) {
    return this.tokenManager.decode(token);
  }

  private uploadPicsAndGetUrls(pics: any[]) {
    return this.cloudGateway.uploadImages(pics);
  }

  private saveRestaurant(restaurant: IRestaurant) {
    return this.restaurantsGateway.save(restaurant);
  }
}

export { AddRestaurantFactory };
