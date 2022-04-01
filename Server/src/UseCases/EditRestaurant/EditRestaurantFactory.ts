import { Coords, Time } from "../../@types/helperTypes";
import { RestaurantInfo } from "../../Adapters/DrivenAdapters/Persistence/RestaurantsGateway/@types/Helpers";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";
import { tokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager";

export interface EditInfo {
  restaurantId: string;
  name?: string;
  locationCoords?: Coords;
  locationName?: string;
  ownerName?: string;
  openingTime?: Time;
  closingTime?: Time;
}

export interface updateArgs {
  ownerId: string;
  newRestaurantInfo: EditInfo;
}
export class EditRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}
  async update({
    authToken,
    newRestaurantInfo,
  }: {
    authToken: string;
    newRestaurantInfo: EditInfo;
  }): Promise<RestaurantInfo | undefined> {
    const ownerId = tokenManager.decode(authToken);
    let restaurant = await this.restaurantGateway.update({ ownerId, newRestaurantInfo });
    return restaurant?.info();
  }
}
