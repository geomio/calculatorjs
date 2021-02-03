function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("+Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);

function divide(number4, number3) {
  return number4 / number3;
}

const number4 = parseInt(prompt("/Enter a number:"));
const number3 = parseInt(prompt("Enter another number:"));
const result2 = divide(number4, number3);
alert(result2);

function multiply(number5, number6) {
  return number5 * number6;
}

const number5 = parseInt(prompt("*Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));
const result3 = multiply(number5, number6);
alert(result3);

function subtract(number7, number8) {
  return number7 - number8;
}

const number7 = parseInt(prompt("-Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));
const result4 = subtract(number7, number8);
alert(result4);