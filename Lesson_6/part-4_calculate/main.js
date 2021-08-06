let expression = document.querySelector('.expression');

let expressionResult = 0;

let numbers = ['', ''];
let flag = true;
let operator = '';
let result = '';

document.querySelector('.operators').onclick = function(e) {
  let target = e.target;

  if(target.tagName != 'BUTTON') {
    return
  } 

  operator = target.innerText;

  flag = false;
  render()
}


document.querySelector('.numbers').onclick = function(e) {
  let target = e.target;

  if(target.tagName != 'BUTTON') {
    return
  } 

  let number = target.innerText;

  if(number == "=") {
    return expressionNumber()
  }

  if(flag) {
    numbers[0] += number;
  } else {
    numbers[1] += number;
  }

  render()
}

function expressionNumber() {
  let oneNumber = +numbers[0];
  let twoNumber = +numbers[1];

  if(operator == '+') {
    result = oneNumber + twoNumber
  } else if(operator == '-') {
    result = oneNumber - twoNumber
  } else if(operator == '*') {
    result = oneNumber * twoNumber
  } else if(operator == '/') {
    result = oneNumber / twoNumber
  } 

  render()
}

function render() {
  expression.innerHTML = `${numbers[0]} ${operator} ${numbers[1]} ${result ? ' = ' + result : ''}`
}

let reload = document.querySelector('.reload');

reload.onclick = function() {
  expression.innerHTML = '';
  numbers = ['', ''];
  operator = '';
  result = '';
  flag = true;
};
