import { NonFunctionProperties } from "../../../../@types/helperTypes";
import { IRestaurantOwner } from "../../../../Domain/RestaurantOwner/RestaurantOwnerFactory";
import { OwerInfo } from "./@types/Helpers";

import { IRestaurantOwnersPersistenceFacade } from "./RestaurantOwnerGateway";

class FakeRestaurantOwnersPersistenceFacade implements IRestaurantOwnersPersistenceFacade {
  private store = new Map<string, OwerInfo>();

  async save(ownerInfo: OwerInfo) {
    this.store.set(ownerInfo.ownerId, ownerInfo);
    return ownerInfo;
  }

  async getByEmail(email: string) {
    let targetOwner: OwerInfo | undefined;

    this.store.forEach((ownerInfo) => {
      if (ownerInfo.email === email) targetOwner = ownerInfo;
    });

    return targetOwner;
  }

  async getByPhone(phone: string) {
    let targetOwner: OwerInfo | undefined;

    this.store.forEach((ownerInfo) => {
      if (ownerInfo.phoneNumber === phone) targetOwner = ownerInfo;
    });

    return targetOwner;
  }

  async deleteAll() {
    this.store.clear();
  }
}

export { FakeRestaurantOwnersPersistenceFacade };
