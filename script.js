const result = document.querySelector('.result').textContent;
const number = document.querySelectorAll('.number');

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

function operate(operator, num1, num2) {
  if (operator === add) {
    return add(num1, num2);
  } else if (operator === subtract) {
    return subtract(num1, num2);
  } else if (operator === multiply) {
    return multiply(num1, num2);
  } else if (operator === divide) {
    return divide(num1, num2);
  }
}
