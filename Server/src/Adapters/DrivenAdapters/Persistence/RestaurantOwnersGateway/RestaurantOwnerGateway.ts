import { RestaurantOwner } from "../../../../Domain/RestaurantOwner/RestaurantOwner";

import type { IRestaurantOwner } from "../../../../Domain/RestaurantOwner/RestaurantOwnerFactory";
import type { IRestaurantOwnersGateway } from "../../../../Ports/Persistence/RestaurantOwnersGateway/RestaurantOwnersGateway.interface";
import { OwerInfo } from "./@types/Helpers";

export interface IRestaurantOwnersPersistenceFacade {
  getByEmail(email: string): Promise<OwerInfo | undefined>;
  save(info: OwerInfo): Promise<OwerInfo>;
}

class RestaurantOwnersGateway implements IRestaurantOwnersGateway {
  constructor(
    private readonly restaurantOwnersPersistence: IRestaurantOwnersPersistenceFacade
  ) {}

  async save(owner: IRestaurantOwner): Promise<IRestaurantOwner> {
    await this.restaurantOwnersPersistence.save(owner.info());
    return owner;
  }

  async getByEmail(email: string): Promise<IRestaurantOwner | undefined> {
    const ownerInfo = await this.restaurantOwnersPersistence.getByEmail(email);

    if (!ownerInfo) return undefined;

    const owner = new RestaurantOwner(ownerInfo.email, ownerInfo.password);
    owner.createdAt = ownerInfo.createdAt;
    owner.ownerId = ownerInfo.ownerId;
    owner.phoneNumber = ownerInfo.phoneNumber;

    return owner;
  }
}

export { RestaurantOwnersGateway };
