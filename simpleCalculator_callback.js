var add  = function (num1, num2) {
  return num1 + num2;
};

var subtract = function (num1, num2) {
  return num1 - num2;
};

var multiply  = function (num1, num2) {
  return num1 * num2;
};

var divide = function (num1, num2) {
  return num1 / num2;
};

var calculate = function (num1, num2, callback) {
  return callback(num1, num2);
};

calculate(45, 25, adder);
