import {IAuthGateway, LoginInfo, SignupInfo} from './AuthGateway.interface';

class AuthGateway implements IAuthGateway {
  login(info: LoginInfo): Promise<string> {
    throw new Error('Login not implemented.');
  }
  signup(info: SignupInfo): Promise<string> {
    throw new Error('Login not implemented.');
  }
}

export {AuthGateway};
