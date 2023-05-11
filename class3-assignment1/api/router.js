/** @format */

const randomNumberController = require("./controller/randomNumber");

const route = require("express").Router();

route.get("/api/v1/random-number", randomNumberController);

module.exports = route;
