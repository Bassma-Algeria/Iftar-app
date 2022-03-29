import { ITokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager.interface";
import type { Args } from "./AddRestaurantFactory.types";

import { Restaurant } from "../../Domain/Restaurant/Restaurant";

class AddRestaurantFactory {
  constructor(private readonly tokenManager: ITokenManager) {}

  async add({ authToken, restaurantInfo }: Args) {
    const userId = this.tokenManager.decode(authToken);

    const restaurant = new Restaurant(restaurantInfo);
  }
}

export { AddRestaurantFactory };
