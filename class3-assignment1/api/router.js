/** @format */

const fakeAddress = require("./controller/fakeAddress");
const randomNumberController = require("./controller/randomNumber");

const route = require("express").Router();

route.get("/api/v1/random-number", randomNumberController);
route.get("/api/v1/fake-address", fakeAddress);

module.exports = route;
