export interface LoginBody {
  email: string;
  password: string;
}

class LoginFactory {
  constructor() {}

  async login(userInfo: LoginBody) {}
}

export { LoginFactory };
