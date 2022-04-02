import { Coords, Time } from "../../@types/helperTypes";
import { Restaurant } from "../../Domain/Restaurant/Restaurant";
import { IRestaurantsGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantsGateway.ts/RestaurantsGateway.interface";

import { tokenManager } from "../../Ports/DrivenPorts/TokenManager/TokenManager";

import { RestaurantInfo } from "../../Adapters/DrivenAdapters/Persistence/RestaurantsGateway/@types/Helpers";

import { ICloudGateway } from "../../Ports/DrivenPorts/Persistence/CloudGateway/CloudGateway.interface";

export interface EditInfo {
  restaurantId: string;
  name: string;
  locationCoords: Coords;
  locationName: string;
  ownerName: string;
  openingTime: Time;
  closingTime: Time;
  pictures: string[];
}

export interface updateArgs {
  ownerId: string;
  newRestaurantInfo: EditInfo;
}
export class EditRestaurentsFactory {
  constructor(
    private readonly restaurantGateway: IRestaurantsGateway,
    private readonly cloudGateway: ICloudGateway
  ) {}

  async update({
    authToken,
    newRestaurantInfo,
  }: {
    authToken: string;
    newRestaurantInfo: EditInfo;
  }): Promise<RestaurantInfo | undefined> {
    const ownerId = tokenManager.decode(authToken);
    let restaurant = await this.restaurantGateway.getRestaurantById(newRestaurantInfo.restaurantId);

    let picturesToUpload: any[] = [];
    let validUrlPicures: string[] = [];
    newRestaurantInfo.pictures.filter((item) => {
      if (!URL_PATTERN.test(item)) {
        picturesToUpload.push(item);
      } else {
        if (restaurant?.pictures.includes(item)) {
          validUrlPicures.push(item);
        }
      }
    });

    let restaurantInfo = restaurant ? restaurant.info() : undefined;
    if (restaurantInfo) {
      if (ownerId !== restaurantInfo.ownerId) {
        throw new Error("You are not the owner of this restaurant");
      } else {
        const pictures = await this.cloudGateway.uploadImages(picturesToUpload);
        newRestaurantInfo.pictures = [...validUrlPicures, ...pictures];
        console.log("final pictures array", newRestaurantInfo.pictures);
        restaurantInfo = {
          ...restaurantInfo,
          name: newRestaurantInfo.name,
          locationCoords: newRestaurantInfo.locationCoords,
          locationName: newRestaurantInfo.locationName,
          openingTime: newRestaurantInfo.openingTime,
          closingTime: newRestaurantInfo.closingTime,
          ownerName: newRestaurantInfo.ownerName,
          pictures: newRestaurantInfo.pictures,
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
const URL_PATTERN =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
