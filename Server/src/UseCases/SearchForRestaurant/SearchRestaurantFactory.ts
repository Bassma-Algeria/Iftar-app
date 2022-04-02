import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

export class SearchRestaurentFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}
  async search(keyword: string) {
    const restaurants = await this.restaurantGateway.findByName(keyword);
    return restaurants.map((restaurant) => {
      return restaurant.info();
    });
  }
}
