import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

export class GetRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}
  async getAll() {
    const restaurants = await this.restaurantGateway.getAll();
    return restaurants;
  }
  async getRestaurantById(restaurantId: string) {
    const restaurant = await this.restaurantGateway.getRestaurantById(restaurantId);
    return restaurant;
  }
}
