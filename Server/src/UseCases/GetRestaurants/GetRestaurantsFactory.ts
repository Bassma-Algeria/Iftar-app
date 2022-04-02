import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import { tokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager";

export class GetRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}

  async getAll() {
    const restaurants = await this.restaurantGateway.getAll();
    return restaurants.map((restaurant) => {
      return restaurant.info();
    });
  }

  async getRestaurantById(restaurantId: string) {
    const restaurant = await this.restaurantGateway.getRestaurantById(restaurantId);
    return restaurant?.info();
  }

  async getRestaurantsByOwnerId(authToken: string) {
    const ownerId = tokenManager.decode(authToken);
    const restaurants = await this.restaurantGateway.getRestaurantsByOwnerId(ownerId);
    return restaurants.map((restaurant) => {
      return restaurant.info();
    });
  }
}
