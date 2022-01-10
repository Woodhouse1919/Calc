const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete')
let activeDisplay = document.querySelector('.result');
let storedDisplay = document.querySelector('.stored-equation');
let activeNumber = '';
let storedNumber = '';
let activeOperator = null;
let result = null;
divideByZero = false;

number.forEach((num) => {
  num.addEventListener('click', (e) => {
    activeNumber += e.target.textContent;
    activeDisplay.textContent = activeNumber;
  });
});

equals.addEventListener('click', () => {
  if (storedNumber === '') {
    return
  }
  checkDivideByZero()
  if (divideByZero === true) {
    reset()
    activeDisplay.textContent = 'Cannot divide by zero'
    return
  }
  result = operate(activeOperator, Number(storedNumber), Number(activeNumber));
  reset();
});

operator.forEach((op) => {
  op.addEventListener('click', (e) => {
    if (storedNumber === '') {
      storedNumber = activeNumber;
      activeNumber = '';
      evaluateEquation(e);
    } else {
      checkDivideByZero()
      if (divideByZero === true) {
        reset()
        activeDisplay.textContent = 'Cannot divide by zero'
        return
      }
      result = operate(activeOperator, Number(storedNumber), Number(activeNumber));
      storedNumber = result
      activeNumber = ''
      activeDisplay.textContent = ''
      evaluateEquation(e)
    }
    
  });
});

function evaluateEquation(e) {
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

clear.addEventListener('click', () => {
  activeNumber = '';
  storedNumber = '';
  activeDisplay.textContent = '';
  storedDisplay.textContent = '';
  activeOperator = null;
  result = null;
  divideByZero = false
});

del.addEventListener('click', () => {
  activeNumber = activeNumber.slice(0, -1)
  activeDisplay.textContent = activeNumber
})

function reset() {
  activeDisplay.textContent = result;
  storedDisplay.textContent = '';
  activeNumber = result;
  storedNumber = '';
  activeOperator = null;
  divideByZero = false
}

function checkDivideByZero() {
  if (activeNumber === '0' && activeOperator === divide) {
    return divideByZero = true
    
  }
}
