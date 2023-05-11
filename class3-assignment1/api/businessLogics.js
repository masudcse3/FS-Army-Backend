/**
 * @format
 * @param {number} start
 * @param {number} end
 * @return {number} random number
 */

function randomNumber(start, end) {
  const startedNum = parseInt(start);
  const endedNum = parseInt(end);
  return Math.floor(Math.random() * (endedNum - startedNum) + startedNum);
}
module.exports = randomNumber;
