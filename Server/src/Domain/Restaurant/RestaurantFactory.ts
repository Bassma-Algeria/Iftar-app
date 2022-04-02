import { Coords, NonFunctionProperties, Time } from "../../@types/helperTypes";
import { IIdGenerator } from "../../Ports/DrivenPorts/IdGenerator/IdGenerator.interface";

export interface IRestaurant {
  ownerId: string;
  restaurantId: string;
  name: string;
  ownerName: string;
  openingTime: Time;
  closingTime: Time;
  locationName: string;
  locationCoords: Coords;
  pictures: any[];
  createdAt?: Date;
  info(): NonFunctionProperties<IRestaurant>;
}

const makeRestaurant = (idGenerator: IIdGenerator) => {
  return class Restaurant implements IRestaurant {
    ownerId: string;
    restaurantId: string;
    private _name!: string;
    private _ownerName!: string;
    private _workingTime?: { opening: Time; closing: Time };
    private _locationName!: string;
    locationCoords: Coords;
    pictures: any[];
    createdAt?: Date;

    constructor(restaurantInfo: NonFunctionProperties<IRestaurant>) {
      this.restaurantId = restaurantInfo.restaurantId || idGenerator.generate();
      this.name = restaurantInfo.name;
      this.ownerName = restaurantInfo.ownerName;
      this.workingTime = {
        opening: restaurantInfo.openingTime,
        closing: restaurantInfo.closingTime,
      };
      this.createdAt = restaurantInfo.createdAt || new Date();
      this.locationCoords = restaurantInfo.locationCoords;
      this.pictures = restaurantInfo.pictures;
      this.locationName = restaurantInfo.locationName;
      this.ownerId = restaurantInfo.ownerId;
    }

    public get openingTime(): Time {
      if (!this._workingTime) throw new Error("working time not set");
      return this._workingTime.opening;
    }

    public get closingTime(): Time {
      if (!this._workingTime) throw new Error("working time not set");
      return this._workingTime.closing;
    }

    public info(): NonFunctionProperties<IRestaurant> {
      return {
        ownerId: this.ownerId,
        restaurantId: this.restaurantId,
        name: this._name,
        ownerName: this._ownerName,
        openingTime: this.openingTime,
        closingTime: this.closingTime,
        locationName: this._locationName,
        locationCoords: this.locationCoords,
        pictures: this.pictures,
        createdAt: this.createdAt,
      };
    }

    private set workingTime(time: { opening: Time; closing: Time }) {
      if (!this.isValidTime(time)) throw new Error("invalid working time");
      this._workingTime = time;
    }

    private isValidTime(time: { opening: Time; closing: Time }) {
      return (
        time.opening.hour < time.closing.hour ||
        (time.opening.hour === time.closing.hour && time.opening.minute < time.closing.minute)
      );
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
