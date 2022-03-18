import { expect } from "chai";

import { AuthServiceFacade } from "../../src/UseCases/AuthService/AuthServiceFacade";

/**
 * 1 - user should be able to register and login
 * 2 - user should not be able to login with wrong password
 * 3 - ..
 */

describe("Authentication Service", () => {
  const userInfo = {
    email: "yasser@gmail.com",
    password: "12345678",
    phoneNumber: "092739283",
  };
  const authService = new AuthServiceFacade();

  it("should register and login with valid credentials", async () => {
    await authService.register(userInfo);
    const token = await authService.login({
      email: userInfo.email,
      password: userInfo.password,
    });

    expect(token).to.be.a("string").to.contain("Bearer ");
  });
});
