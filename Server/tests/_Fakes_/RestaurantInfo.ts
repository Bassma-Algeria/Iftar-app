import faker, { fake } from "faker";

import { NonFunctionProperties } from "../../src/@types/helperTypes";
import { IRestaurant } from "../../src/Domain/Restaurant/RestaurantFactory";

const getResturantInfo = (): NonFunctionProperties<IRestaurant> => {
  return {
    ownerId: faker.datatype.uuid(),
    name: "some name",
    ownerName: faker.internet.userName(),
    restaurantId: faker.datatype.uuid(),
    openingTime: { hour: 10, minute: 0 },
    closingTime: { hour: 20, minute: 0 },
    locationName: faker.internet.userName(),
    locationCoords: { latitude: 10, longitude: 100 },
    pictures: [],
    createdAt: faker.date.recent(),
  };
};

export { getResturantInfo };
