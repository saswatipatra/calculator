var add = function(number1, number2) {
  return number1 + number2;
};
var subract = function(number1, number2) {
  return number1 - number2;
};
var multiple = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter the first number on which you would like to perform add, subract, multiple and Division:"));
var number2 = parseInt(prompt("Enter second number on which you would like to perform add, subract, multiple and Division :"));

alert("Result after Adding: " + add(number1, number2));
alert("Result after Subracting: " + subract(number1, number2));
alert("Result after Multiplication: " + multiple(number1, number2));
alert("Result after Division: " + divide(number1, number2));
