import { Coords } from "../../@types/helperTypes";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

export class EditRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}
  updateLocation(restaurantId: string, coords: Coords, locationName: string) {
    return this.restaurantGateway.updateLocation(restaurantId, coords, locationName);
  }
  async updateName(restaurantId: string, name: string) {
    return this.restaurantGateway.updateName(restaurantId, name);
  }
}
