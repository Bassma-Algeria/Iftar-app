import { Coords, NonFunctionProperties, Time } from "../../@types/helperTypes";
import { IIdGenerator } from "../../Ports/DrivenPorts/IdGenerator/IdGenerator.interface";

export interface IRestaurant {
  restaurantId?: string;
  name: string;
  ownerName: string;
  openingTime: Time;
  closingTime: Time;
  locationName: string;
  locationCoords: Coords;
  pictures: any[];
  createdAt?: Date;
}

const makeRestaurant = (idGenerator: IIdGenerator) => {
  return class Restaurant implements IRestaurant {
    restaurantId?: string | undefined;
    private _name?: string;
    private _ownerName?: string;
    openingTime: Time;
    closingTime: Time;
    private _locationName?: string;
    locationCoords: Coords;
    pictures: any[];
    createdAt?: Date | undefined;

    constructor(restaurantInfo: NonFunctionProperties<IRestaurant>) {
      this.restaurantId = restaurantInfo.restaurantId || idGenerator.generate();
      this.name = restaurantInfo.name;
      this.ownerName = restaurantInfo.ownerName;
      this.openingTime = restaurantInfo.openingTime;
      this.closingTime = restaurantInfo.closingTime;
      this.createdAt = restaurantInfo.createdAt || new Date();
      this.locationCoords = restaurantInfo.locationCoords;
      this.pictures = restaurantInfo.pictures;
      this.locationName = restaurantInfo.locationName;
    }

    public set name(value: string) {
      if (!value) throw new Error("Name should not be empty");
      this._name = value;
    }

    public set ownerName(value: string) {
      if (!value) throw new Error("ownerName should not be empty");
      this._ownerName = value;
    }

    public set locationName(value: string) {
      if (!value) throw new Error("locationName should not be empty");
      this._locationName = value;
    }
  };
};

export { makeRestaurant };
