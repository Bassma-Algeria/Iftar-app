import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

class SearchForRestaurantFactory {
  constructor(private readonly restaurantsGateway: IRestaurantsGateway) {}

  async searchFor(keyword: string) {
    const restaurants = await this.restaurantsGateway.searchFor(keyword);

    return restaurants.map((restaurant) => restaurant.info());
  }
}

export { SearchForRestaurantFactory };
