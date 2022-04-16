import axios from 'axios';
import {IAuthGateway, LoginInfo, SignupInfo} from './AuthGateway.interface';

class AuthGateway implements IAuthGateway {
  // private baseUrl: string = 'http://192.168.1.105:5000/api/auth';
  private baseUrl: string = 'http://iftar-server.eastus.azurecontainer.io/api/auth';

  async login(info: LoginInfo): Promise<string> {
    try {
      const res = await axios.post(`${this.baseUrl}/login`, info);

      return res.data.data;
    } catch (error: any) {
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
