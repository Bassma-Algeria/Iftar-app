import type { IRestaurantOwnersGateway } from "../../Ports/Persistence/RestaurantOwnersGateway/RestaurantOwnersGateway.interface";

import { RestaurantOwner } from "../../Domain/RestaurantOwner/RestaurantOwner";
import type { IRestaurantOwner } from "../../Domain/RestaurantOwner/RestaurantOwnerFactory";

interface RegistrationBody {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

class RegisterFactory {
  constructor(
    private readonly restaurantOwnersGateway: IRestaurantOwnersGateway
  ) {}

  async register(userInfo: RegistrationBody) {
    const { email, password, confirmPassword, phoneNumber } = userInfo;
    const owner = new RestaurantOwner(email, password);
    owner.phoneNumber = phoneNumber;

    if (password !== confirmPassword) this.WrongConfirmPasswordException();

    const existingOwner = await this.findOwnerByEmail(owner.email);
    if (existingOwner) throw new Error("email already used");

    await this.saveOwner(owner);
  }

  private async saveOwner(owner: IRestaurantOwner) {
    await this.restaurantOwnersGateway.save(owner);
  }

  private findOwnerByEmail(email: string) {
    return this.restaurantOwnersGateway.getByEmail(email);
  }

  private WrongConfirmPasswordException(): never {
    throw new Error("Confirm Password didn't match the password");
  }
}

export { RegisterFactory };
