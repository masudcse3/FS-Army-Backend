/** @format */

const { faker } = require("@faker-js/faker");
/**
 * @format
 * @param {number} start
 * @param {number} end
 * @return {number} random number
 */

const randomNumber = (start, end) => {
  const startedNum = parseInt(start);
  const endedNum = parseInt(end);
  return Math.floor(Math.random() * (endedNum - startedNum) + startedNum);
};
/**
 * generate fake address based on the user's given properties
 * @param {Array} arr
 * @returns {object} fakeAddress
 */
const fakeProfile = (arr) => {
  return arr.reduce((result, item) => {
    switch (item) {
      case "firstName":
        return { ...result, firstName: faker.name.firstName() };

      case "lastName":
        return { ...result, lastName: faker.name.lastName() };

      case "email":
        return { ...result, email: faker.internet.email() };

      case "avatar":
        return { ...result, avatar: faker.image.avatar() };

      case "age":
        return { ...result, age: faker.random.numeric() };

      case "address":
        return {
          ...result,
          address: {
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
          },
        };

      default:
        return result;
    }
  }, {});
};

module.exports = { randomNumber, fakeProfile };
