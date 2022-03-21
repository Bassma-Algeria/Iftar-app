import type { IRestaurantOwnersGateway } from "../../Ports/DrivenPorts/Persistence/RestaurantOwnersGateway/RestaurantOwnersGateway.interface";
import type { IPasswordManager } from "../../Ports/DrivenPorts/PasswordManager/PasswordManager.interface";

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
    private readonly restaurantOwnersGateway: IRestaurantOwnersGateway,
    private readonly passwordManager: IPasswordManager
  ) {}

  async register(registrationBody: RegistrationBody) {
    const owner = new RestaurantOwner(registrationBody);

    const confirmPassword = registrationBody.confirmPassword.trim();
    if (owner.password !== confirmPassword) this.WrongConfirmPasswordException();

    const ownerWithSameEmail = await this.findOwnerByEmail(owner.email);
    if (ownerWithSameEmail) this.EmailExistException();

    const ownerWithSamePhone = await this.findOwnerByPhone(owner.phoneNumber);
    if (ownerWithSamePhone) this.PhoneExistException();

    owner.password = await this.passwordManager.hash(owner.password);

    await this.saveOwner(owner);
  }

  private async saveOwner(owner: IRestaurantOwner) {
    await this.restaurantOwnersGateway.save(owner);
  }

  private findOwnerByEmail(email: string) {
    return this.restaurantOwnersGateway.getByEmail(email);
  }

  private findOwnerByPhone(phoneNumber: string) {
    return this.restaurantOwnersGateway.getByPhone(phoneNumber);
  }

  private WrongConfirmPasswordException(): never {
    throw { confirmPassword: "Confirm Password didn't match the password" };
  }

  private EmailExistException(): never {
    throw { email: "email already used" };
  }

  private PhoneExistException(): never {
    throw { phoneNumber: "phone number already used" };
  }
}

export { RegisterFactory };
