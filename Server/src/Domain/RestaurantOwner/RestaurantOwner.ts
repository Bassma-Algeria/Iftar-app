import { FakeIdGenerator } from "../../Adapters/DrivenAdapters/IdGenerator/FakeIdGenerator";
import { makeRestaurantOwner } from "./RestaurantOwnerFactory";

const RestaurantOwner = makeRestaurantOwner(new FakeIdGenerator());

export { RestaurantOwner };
