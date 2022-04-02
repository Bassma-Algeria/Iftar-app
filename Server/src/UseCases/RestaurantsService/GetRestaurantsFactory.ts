import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway/RestaurantsGateway.interface";
import { tokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager";

class GetRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}

  async getAll() {
    const restaurants = await this.restaurantGateway.getAll();

    return restaurants.map((restaurant) => restaurant.info());
  }

  async getById(restaurantId: string) {
    const restaurant = await this.restaurantGateway.getById(restaurantId);
    if (!restaurant) throw new Error("restarant doesn't exist");

    return restaurant.info();
  }

  async getRestaurantsOfAuthOwner(authToken: string) {
    const ownerId = tokenManager.decode(authToken);
    const restaurants = await this.restaurantGateway.findAllByOwnerId(ownerId);

    return restaurants.map((restaurant) => restaurant.info());
  }
}

export { GetRestaurentsFactory };
