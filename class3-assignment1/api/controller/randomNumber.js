/** @format */
const { randomNumber } = require("../businessLogics");
const randomNumberController = (req, res) => {
  let { start, end } = req.query;
  start = parseInt(start);
  end = parseInt(end);

  if (isNaN(start) || isNaN(end)) {
    res.status(403).json({ msg: "Wrong input. please enter integer number" });
    return;
  }
  return res.status(200).json({
    "Your Random Number": randomNumber(start, end),
  });
};
module.exports = randomNumberController;
