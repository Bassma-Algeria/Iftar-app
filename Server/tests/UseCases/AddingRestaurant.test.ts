import { expect } from "chai";
import { describe } from "mocha";
import { getResturantInfo } from "../_Fakes_/RestaurantInfo";
/**
 * closing time should be after opening time;
 * name can't be empty;
 * pictures are optional;
 * invalid token isn't allowed;
 */

describe("Adding a Restaurant use case", () => {
  const RestaurantInfo = getResturantInfo();
  const RestaurantFactory = new RestaurantFactory();
  it("User should be able to add a restaurant", async () => {
    await expect(RestaurantFactory.add(RestaurantInfo)).to.not.Throw();
  });
});
