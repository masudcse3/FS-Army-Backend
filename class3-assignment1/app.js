/** @format */

const express = require("express");
const route = require("./api/router");
const app = express();

app.use(route);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server starts and listen on port ${PORT}`);
});
