/** @format */

const countCharectersController = require("./controller/countCharecters");
const fakeAddress = require("./controller/fakeAddress");
const randomNumberController = require("./controller/randomNumber");

const route = require("express").Router();

route.get("/api/v1/random-number", randomNumberController);
route.get("/api/v1/fake-address", fakeAddress);
route.get("/api/v1/count-charecters", countCharectersController);

module.exports = route;
