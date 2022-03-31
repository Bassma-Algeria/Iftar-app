import { ITokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager.interface";
import type { Args } from "./AddRestaurantFactory.types";

import { Restaurant } from "../../Domain/Restaurant/Restaurant";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

class AddRestaurantFactory {
  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly restaurantsGateway: IRestaurantsGateway
  ) {}

  async add({ authToken, restaurantInfo }: Args) {
    const userId = this.tokenManager.decode(authToken);
    const restaurant = new Restaurant(restaurantInfo);
    const savedRestaurant = await this.restaurantsGateway.save(restaurant);
  }
}

export { AddRestaurantFactory };
