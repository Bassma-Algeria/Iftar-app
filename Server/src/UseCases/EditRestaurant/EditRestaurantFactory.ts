import { Coords, Time } from "../../@types/helperTypes";
import { RestaurantInfo } from "../../Adapters/DrivenAdapters/Persistence/RestaurantsGateway/@types/Helpers";
import { Restaurant } from "../../Domain/Restaurant/Restaurant";
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
    let restaurant = await this.restaurantGateway.getRestaurantById(newRestaurantInfo.restaurantId);
    let restaurantInfo = restaurant ? restaurant.info() : undefined;
    if (restaurantInfo) {
      if (ownerId !== restaurantInfo.ownerId) {
        throw new Error("You are not the owner of this restaurant");
      } else {
        restaurantInfo = {
          ...restaurantInfo,
          name: newRestaurantInfo.name ? newRestaurantInfo.name : restaurantInfo.name,
          locationCoords: newRestaurantInfo.locationCoords
            ? newRestaurantInfo.locationCoords
            : restaurantInfo.locationCoords,
          locationName: newRestaurantInfo.locationName
            ? newRestaurantInfo.locationName
            : restaurantInfo.locationName,
          openingTime: newRestaurantInfo.openingTime
            ? newRestaurantInfo.openingTime
            : restaurantInfo.openingTime,
          closingTime: newRestaurantInfo.closingTime
            ? newRestaurantInfo.closingTime
            : restaurantInfo.closingTime,
          ownerName: newRestaurantInfo.ownerName
            ? newRestaurantInfo.ownerName
            : restaurantInfo.ownerName,
        };

        const newRestaurant = await this.restaurantGateway.update(new Restaurant(restaurantInfo));
        if (newRestaurant) {
          return newRestaurant.info();
        } else {
          return undefined;
        }
      }
    }
  }
}
