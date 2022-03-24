import faker from "faker";

const getResturantInfo = () => {
  return {
    name: "some name",
    restaurantId: faker.datatype.uuid(),
    ownerToken: faker.datatype.uuid(),
    openingTime: {
      hour: 10,
      minute: 0,
    },
    closingTime: {
      hour: 20,
      minute: 0,
    },
    locationName: faker.internet.userName(),
  };
};

export { getResturantInfo };
