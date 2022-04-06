import type {SignupInfo, IAuthGateway, LoginInfo} from '../AuthGateway.interface';

class FakeAuthGateway implements IAuthGateway {
  async login(userInfo: LoginInfo): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.email === 'admin@gmial.com' && userInfo.password === 'admin') {
          resolve('token');
        } else {
          reject('Invalid credentials');
        }
      }, 400);
    });
  }

  async signup(userInfo: SignupInfo): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve('random token'), 400);
    });
  }
}

export {FakeAuthGateway};
