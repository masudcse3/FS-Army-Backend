/**
 * @format
 * @param {object} req
 * @param {object} res
 */

const { fakeProfile } = require("../businessLogics");

const fakeAddress = (req, res) => {
  /**
   * @param {string} properties
   */
  const { properties } = req.query;
  const propertiesArr = properties.split(",");
  if (propertiesArr.length === 0) {
    return res.status(403).json({ msg: "Please enter properties" });
  }
  return res.status(200).json(fakeProfile(propertiesArr));
};
module.exports = fakeAddress;
