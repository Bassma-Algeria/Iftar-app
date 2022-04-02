import { Coords, Time } from "../../@types/helperTypes";

export interface EditInfo {
  restaurantId: string;
  name: string;
  locationCoords: Coords;
  locationName: string;
  ownerName: string;
  workingTime: { opening: Time; closing: Time };
  pictures: string[];
}

export interface UpdateArgs {
  authToken: string;
  newRestaurantInfo: EditInfo;
}
