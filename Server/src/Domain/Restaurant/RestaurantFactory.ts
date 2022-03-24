import { NonFunctionProperties } from "../../@types/helperTypes";
import { IIdGenerator } from "../../Ports/DrivenPorts/IdGenerator/IdGenerator.interface";

interface Time {
  hour: number;
  minute: number;
}
export interface IRestaurant {
  restaurantId: string;
  name: string;
  ownerToken: string;
  openingTime: Time;
  closingTime: Time;
  locationName: string;
  info(): NonFunctionProperties<IRestaurant>;
}
type ConstructurParams = Partial<NonFunctionProperties<IRestaurant>>;

const makeRestaurant = (idGenerator: IIdGenerator) => {
  return class RestaurantFactory implements IRestaurant {
    private _restarantId?: string;
    private _name?: string;
    private _ownerToken?: string;
    private _openingTime?: {
      hour: number;
      minute: number;
    };
    private _closingTime?: {
      hour: number;
      minute: number;
    };
    private _locationName?: string;
    constructor(params: ConstructurParams) {
      this.restarantId = params.restaurantId;
      this.name = params.name;
      this.ownerToken = params.ownerToken;
      this.openingTime = params.openingTime;
      this.closingTime = params.closingTime;
      this.locationName = params.locationName;
    }
    public get ownerId(): string {
      if (!this._ownerId) this.IdNotSetException();
      return this._ownerId;
    }

    public set ownerId(id: string) {
      if (!id) this.InvalidIdException();
      this._ownerId = id;
    }
  };
};
