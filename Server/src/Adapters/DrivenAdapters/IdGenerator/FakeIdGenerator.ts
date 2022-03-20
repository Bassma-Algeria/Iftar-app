import type { IIdGenerator } from "../../../Ports/DrivenPorts/IdGenerator/IdGenerator.interface";

class FakeIdGenerator implements IIdGenerator {
  generate(): string {
    return Math.random().toString();
  }
}

export { FakeIdGenerator };
