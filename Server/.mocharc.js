const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const chaiExclude = require("chai-exclude");
const deepEqual = require("deep-equal-in-any-order");
const chaiHttp = require("chai-http");

process.env.NODE_ENV = process.env.NODE_ENV || "TEST";

chai.use(chaiExclude);
chai.use(chaiAsPromised);
chai.use(deepEqual);
chai.use(chaiHttp);
