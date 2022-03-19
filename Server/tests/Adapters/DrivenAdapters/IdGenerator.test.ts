import { expect } from "chai";

import { FakeIdGenerator } from "../../../src/Adapters/DrivenAdapters/IdGenerator/FakeIdGenerator";
import { IIdGenerator } from "../../../src/Ports/IdGenerator/IdGenerator.interface";

// const testHandler = (idGenerator: IIdGenerator) => () => {
//   it("should generate a unique id every time", () => {
//     expect(idGenerator.generate())
//       .to.be.a("string")
//       .to.not.equal(idGenerator.generate())
//       .to.not.equal(idGenerator.generate())
//       .to.not.equal(idGenerator.generate())
//       .to.not.equal(idGenerator.generate())
//       .to.not.equal(idGenerator.generate());
//   });
// };

describe("IdGenerator", () => {
  const idGenerator = new FakeIdGenerator();

  it("should generate a unique id every time", () => {
    expect(idGenerator.generate())
      .to.be.a("string")
      .to.not.equal(idGenerator.generate())
      .to.not.equal(idGenerator.generate())
      .to.not.equal(idGenerator.generate())
      .to.not.equal(idGenerator.generate())
      .to.not.equal(idGenerator.generate());
  });
});
