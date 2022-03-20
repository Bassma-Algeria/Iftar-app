import faker from "faker";

const getResturantOwnerInfo = () => {
  return {
    createdAt: faker.date.past(),
    email: faker.internet.email().toLocaleLowerCase(),
    ownerId: faker.datatype.uuid(),
    password: faker.internet.password(),
    phoneNumber: "0798818299",
  };
};

export { getResturantOwnerInfo };
