const convertToCelsius = function(num) {
  let convert = (num - 32) * 5/9;
  return rounded = Math.round(convert * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let convert = (num * 9/5) + 32;
  return rounded = Math.round(convert * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
