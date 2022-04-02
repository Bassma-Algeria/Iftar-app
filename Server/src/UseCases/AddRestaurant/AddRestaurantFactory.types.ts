import { Coords, Time } from "../../@types/helperTypes";

export interface Args {
  authToken: string;
  restaurantInfo: {
    name: string;
    ownerName: string;
    workingTime: { opening: Time; closing: Time };
    locationName: string;
    locationCoords: Coords;
    pictures: any[];
  };
}
