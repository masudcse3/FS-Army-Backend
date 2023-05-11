/** @format */

const { countCharecters } = require("../businessLogics");

const countCharectersController = (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(403).json({ msg: "Enter your string query" });
  }
  return res.status(200).json(countCharecters(text));
};
module.exports = countCharectersController;
