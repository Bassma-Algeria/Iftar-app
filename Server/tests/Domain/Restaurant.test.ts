import { expect } from "chai";

import { makeRestaurant } from "../../src/Domain/Restaurant/RestaurantFactory";
import { idGenerator } from "../../src/Ports/DrivenPorts/IdGenerator/IdGenerator";

import { getResturantInfo } from "../_Fakes_/RestaurantInfo";

describe("Restaurant Entity", () => {
  const restaurantInfo = getResturantInfo();
  const Restaurant = makeRestaurant(idGenerator);

  it("should not have a restaurant with an empty name or ownerName or locationName", () => {
    expect(() => new Restaurant({ ...restaurantInfo, name: "" })).to.throw();
    expect(() => new Restaurant({ ...restaurantInfo, ownerName: "" })).to.throw();
    expect(() => new Restaurant({ ...restaurantInfo, locationName: "" })).to.throw();
  });

  it("should identify the resturant when no id is provided", () => {
    const restaurant1 = new Restaurant({ ...restaurantInfo, restaurantId: "" });
    const restaurant2 = new Restaurant({ ...restaurantInfo, restaurantId: "" });
    expect(restaurant1.restaurantId).to.be.a("string").and.to.not.equal(restaurant2.restaurantId);

    const restaurant3 = new Restaurant(restaurantInfo);
    expect(restaurant3.restaurantId).to.equal(restaurantInfo.restaurantId);
  });

  it("when no creation time is provided, generate one", () => {
    const restaurant1 = new Restaurant({ ...restaurantInfo, createdAt: undefined });
    expect(restaurant1.createdAt).to.be.a("Date");

    const restaurant2 = new Restaurant(restaurantInfo);
    expect(restaurant2.createdAt).to.equal(restaurantInfo.createdAt);
  });

  it("should not have a restaurant with an opening time bigger than the closing time", () => {
    let info = {
      ...restaurantInfo,
      openingTime: { hour: 10, minute: 0 },
      closingTime: { hour: 9, minute: 0 },
    };
    expect(() => new Restaurant(info)).to.throw();

    info.openingTime.hour = 9;
    info.openingTime.minute = 20;
    info.closingTime.hour = 9;
    info.closingTime.minute = 0;
    expect(() => new Restaurant(info)).to.throw();
  });
});
