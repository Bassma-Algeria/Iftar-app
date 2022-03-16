interface LoginInfo {
  email: string;
  password: string;
}

interface SignupInfo extends LoginInfo {
  confirmPassword: string;
  phoneNumber: string;
}

export interface IAuthGateway {
  login(info: LoginInfo): Promise<string>;
  signup(info: SignupInfo): Promise<string>;
}
