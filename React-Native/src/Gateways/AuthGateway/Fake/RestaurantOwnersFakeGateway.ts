import type {
  SignupInfo,
  IAuthGateway,
  LoginInfo,
} from '../AuthGateway.interface';

import {RESTAURANTSOWNERS} from './RESTAURANTSOWNERS';

class RestaurantsOwnersFakeGateway implements IAuthGateway {
  async login(userInfo: LoginInfo): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          RESTAURANTSOWNERS.map(e => {
            if (
              e.email === userInfo.email &&
              e.password === userInfo.password
            ) {
              resolve('token');
            } else {
              reject({message: 'Invalid credentials'});
            }
          }),
        400,
      );
    });
  }
  async signup(userInfo: SignupInfo): Promise<string> {
    try {
      return new Promise(() => {
        setTimeout(() => 'random token', 400);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export {RestaurantsOwnersFakeGateway};
