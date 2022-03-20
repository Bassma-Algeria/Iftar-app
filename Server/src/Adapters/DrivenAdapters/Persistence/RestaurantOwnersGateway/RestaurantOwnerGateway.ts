import { RestaurantOwner } from "../../../../Domain/RestaurantOwner/RestaurantOwner";

import type { IRestaurantOwner } from "../../../../Domain/RestaurantOwner/RestaurantOwnerFactory";
import type { IRestaurantOwnersGateway } from "../../../../Ports/DrivenPorts/Persistence/RestaurantOwnersGateway/RestaurantOwnersGateway.interface";

import { OwerInfo } from "./@types/Helpers";

export interface IRestaurantOwnersPersistenceFacade {
  getByEmail(email: string): Promise<OwerInfo | undefined>;
  save(info: OwerInfo): Promise<OwerInfo>;
  deleteAll(): Promise<void>;
}

class RestaurantOwnersGateway implements IRestaurantOwnersGateway {
  constructor(
    private readonly restaurantOwnersPersistence: IRestaurantOwnersPersistenceFacade
  ) {}

  async save(owner: IRestaurantOwner): Promise<IRestaurantOwner> {
    const ownerInfo = await this.restaurantOwnersPersistence.save(owner.info());

    return new RestaurantOwner(ownerInfo);
  }

  async getByEmail(email: string): Promise<IRestaurantOwner | undefined> {
    const ownerInfo = await this.restaurantOwnersPersistence.getByEmail(email);
    if (!ownerInfo) return undefined;

    return new RestaurantOwner(ownerInfo);
  }
}

export { RestaurantOwnersGateway };