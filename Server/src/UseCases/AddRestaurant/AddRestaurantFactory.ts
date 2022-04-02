import { ITokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager.interface";
import type { Args } from "./AddRestaurantFactory.types";

import { Restaurant } from "../../Domain/Restaurant/Restaurant";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import { ICloudGateway } from "../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";

class AddRestaurantFactory {
  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly restaurantsGateway: IRestaurantsGateway,
    private readonly cloudGateway: ICloudGateway
  ) {}

  async add({ authToken, restaurantInfo }: Args) {
    const userId = this.tokenManager.decode(authToken);
    const picturesUrls = await this.cloudGateway.uploadImages(restaurantInfo.pictures);
    const restaurant = new Restaurant({
      ...restaurantInfo,
      ownerId: userId,
      pictures: picturesUrls,
    });
    const savedRestaurant = await this.restaurantsGateway.save(restaurant);
    return savedRestaurant.info();
  }
}

export { AddRestaurantFactory };
