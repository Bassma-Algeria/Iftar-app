import { IPasswordManager } from "../../../Ports/DrivenPorts/PasswordManager/PasswordManager.interface";

class FakePasswordManager implements IPasswordManager {
  async hash(key: string): Promise<string> {
    return `${key}anotherHash`;
  }
}

export { FakePasswordManager };
