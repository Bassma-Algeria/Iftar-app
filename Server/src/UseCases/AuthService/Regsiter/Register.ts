export interface RegisterBody {
  email: string;
  password: string;
  phoneNumber: string;
}

class RegisterFactory {
  constructor() {}

  async register(userInfo: RegisterBody) {
    
  }
}

export { RegisterFactory };
