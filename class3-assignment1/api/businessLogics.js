/** @format */

const { faker } = require("@faker-js/faker");
/**
 * generate a random integer number from a given range
 * @param {number} start accept an integer
 * @param {number} end accept an integer
 * @return {number} a random integer number
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
/**
 * accept a string and returns the number of lettrs, number of numeric and number of symbols
 * @param {string} str
 * @returns {object} result
 */
const countCharecters = (str) => {
  let result = {
    letter: 0,
    number: 0,
    symbol: 0,
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-zA-z]/.test(char)) {
      result.letter++;
    } else if (/[0-9]/.test(char)) {
      result.number++;
    } else {
      result.symbol++;
    }
  }
  return result;
};

module.exports = { randomNumber, fakeProfile, countCharecters };
