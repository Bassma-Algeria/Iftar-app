import axios from 'axios';
import env from  'react-native-config';

import {IAuthGateway, LoginInfo, SignupInfo} from './AuthGateway.interface';

class AuthGateway implements IAuthGateway {
  private baseUrl: string = `${env.BACKEND_URL}/api/auth`;

  async login(info: LoginInfo): Promise<string> {
    try {
      const res = await axios.post(`${this.baseUrl}/login`, info);
      return res.data.data;
    } catch (error: any) {
      console.log(error);
      throw error.response.data.error;
    }
  }

  async signup(info: SignupInfo): Promise<string> {
    try {
      const res = await axios.post(`${this.baseUrl}/register`, info);

      return res.data.data;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }
}

export {AuthGateway};
