import { Coords, Time } from "../../@types/helperTypes";
import { IRestaurant } from "../../Domain/Restaurant/RestaurantFactory";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

export interface EditInfo {
  restaurantId: string;
  name?: string;
  locationCoords?: Coords;
  locationName?: string;
  ownerName?: string;
  openingTime?: Time;
  closingTime?: Time;
}

export class EditRestaurentsFactory {
  constructor(private readonly restaurantGateway: IRestaurantsGateway) {}
  update(newRestaurentInfo: EditInfo): Promise<IRestaurant | undefined> {
    return this.restaurantGateway.update(newRestaurentInfo);
  }
}
