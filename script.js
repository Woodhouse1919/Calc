let display = document.querySelector('.result');
let storedDisplay = document.querySelector('.stored-equation');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
let equation = [];
let storedEquation = [];
let chosenOperator = '';

// stores numbers that user clicks into the equation variable and displays it in the calc screen
number.forEach((num) => num.addEventListener('click', (e) => screenUpdate(e)));

function screenUpdate(e) {
  equation += e.target.textContent;
  display.textContent = equation;
}

operator.forEach((op) => {
  op.addEventListener('click', (e) => {
    if (e.target.textContent === '+') {
      if (equation.length > 0) {
        chosenOperator = add;
        storedEquation = equation;
        equation = [];
        storedDisplay.textContent = `${storedEquation} +`;
      }
    }
  });
});

equals.addEventListener('click', () => {
  result = operate(chosenOperator, Number(storedEquation), Number(equation));
  display.textContent = result;
  storedEquation = result;
});

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
