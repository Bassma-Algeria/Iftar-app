import { ITokenManager } from "../../../Ports/DrivenPorts/TokenManager/TokenManager.interface";

class FakeTokenManager implements ITokenManager {
  generateToken(key: string): string {
    return `Bearer ${key}token`;
  }
}

export { FakeTokenManager };
