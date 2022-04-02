import { FakeCloudGateway } from "../../../Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";
import { ICloudGateway } from "./CloudGateway.interface";

let cloudGateway: ICloudGateway;

if (process.env.NODE_ENV === "TEST") {
  cloudGateway = new FakeCloudGateway();
} else {
  // add the real cloud gateway later
  cloudGateway = new FakeCloudGateway();
}

export { cloudGateway };
