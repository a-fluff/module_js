let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

if(firstNumber > secondNumber) {
  console.log(firstNumber);
} else {
  console.log(secondNumber);
}

(firstNumber > secondNumber) ? console.log(firstNumber) : console.log(secondNumber);