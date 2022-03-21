const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

process.env.NODE_ENV = "TEST";

chai.use(chaiAsPromised);
