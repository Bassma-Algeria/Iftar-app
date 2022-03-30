import { Coords, Time } from "../../@types/helperTypes";

export interface Args {
  authToken: string;
  restaurantInfo: {
    name: string;
    ownerName: string;
    openingTime: Time;
    closingTime: Time;
    locationName: string;
    locationCoords: Coords;
    pictures: any[];
  };
}