import type { NonFunctionProperties } from "../../@types/helperTypes";

import type { IIdGenerator } from "../../Ports/IdGenerator/IdGenerator.interface";

export interface IRestaurantOwner {
  ownerId: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  info(): NonFunctionProperties<IRestaurantOwner>;
}

const makeRestaurantOwner = (idGenerator: IIdGenerator) => {
  return class RestaurantOwner implements IRestaurantOwner {
    ownerId: string;
    email: string;
    password: string;
    createdAt: Date;
    private _phoneNumber?: string;

    constructor(email: string, password: string) {
      email = email.trim().toLocaleLowerCase();
      password = password.trim();

      if (!this.isValidEmail(email)) this.InvalidEmailException();
      if (!this.isValidPassword(password)) this.InvalidPasswordException();

      this.ownerId = idGenerator.generate();
      this.email = email;
      this.password = password;
      this.createdAt = new Date();
    }

    public get phoneNumber(): string {
      if (!this._phoneNumber) this.NumberNotSetException();

      return this._phoneNumber;
    }

    public set phoneNumber(number: string | undefined) {
      number = number?.replace(/ /g, "");

      if (!this.isValidPhoneNumber(number))
        throw new Error("invalid phone number");

      this._phoneNumber = number;
    }

    info(): NonFunctionProperties<IRestaurantOwner> {
      return {
        email: this.email,
        ownerId: this.ownerId,
        password: this.password,
        createdAt: this.createdAt,
        phoneNumber: this.phoneNumber,
      };
    }

    private isValidEmail(email: string): boolean {
      return EMAIL_PATTERN.test(email);
    }

    private isValidPassword(password: string): boolean {
      return !!password;
    }

    private isValidPhoneNumber(number?: string): boolean {
      return !!number && PHONE_NUMBER_PATTERN.test(number);
    }

    private NumberNotSetException(): never {
      throw new Error("phone number not set");
    }

    private InvalidEmailException(): never {
      throw new Error("invalid email");
    }

    private InvalidPasswordException(): never {
      throw new Error("invalid password");
    }
  };
};

const PHONE_NUMBER_PATTERN = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { makeRestaurantOwner };
