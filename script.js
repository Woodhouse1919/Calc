const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let activeDisplay = document.querySelector('.result');
let storedDisplay = document.querySelector('.stored-equation');
let activeNumber = '';
let storedNumber = '';
let activeOperator = null;
let result = null;

number.forEach((num) => num.addEventListener('click', (e) => screenUpdate(e)));

operator.forEach((op) =>
  op.addEventListener('click', (e) => {
    checkOperation(e);
    console.log(activeOperator)
  })
);

equals.addEventListener('click', () => {
  result = operate(activeOperator, Number(storedNumber), Number(activeNumber));
  reset();
});

clear.addEventListener('click', () => {
  activeNumber = '';
  storedNumber = '';
  activeDisplay.textContent = '';
  storedDisplay.textContent = '';
  activeOperator = null;
  result = null;
});

function screenUpdate(e) {
  activeNumber += e.target.textContent;
  activeDisplay.textContent = activeNumber;
}

function checkOperation(e) {
  storedNumber = activeNumber;

  if (e.target.textContent === '+') {
    storedDisplay.textContent = `${storedNumber} +`;
    activeOperator = add;
  } else if (e.target.textContent === '-') {
    storedDisplay.textContent = `${storedNumber} -`;
    activeOperator = subtract;
  } else if (e.target.textContent === '÷') {
    storedDisplay.textContent = `${storedNumber} ÷`;
    activeOperator = divide;
  } else if (e.target.textContent === 'x') {
    storedDisplay.textContent = `${storedNumber} x`;
    activeOperator = multiply;
  }
  activeNumber = '';
}

function reset() {
  activeDisplay.textContent = result;
  storedDisplay.textContent = '';
  activeNumber = result;
  storedNumber = '';
  result = null;
  activeOperator = null;
}

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
