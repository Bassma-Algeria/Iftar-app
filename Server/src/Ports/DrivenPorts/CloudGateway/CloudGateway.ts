import { ICloudGateway } from "./CloudGateway.interface";

import { FakeCloudGateway } from "../../../Adapters/DrivenAdapters/CloudGateway/FakeCloudGateway";
import { CloudinaryCloudGateway } from "../../../Adapters/DrivenAdapters/CloudGateway/CloudinaryCloudGateway";

let cloudGateway: ICloudGateway;

if (process.env.NODE_ENV === "TEST") {
  cloudGateway = new FakeCloudGateway();
} else {
  cloudGateway = new CloudinaryCloudGateway();
}

export { cloudGateway };
