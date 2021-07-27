//function declaratin - создаем, потом вызываем [1ый вид функции]

function sayHello() {
  console.log('Hello world!');
}

sayHello();
sayHello();

function calc(n, x, y) {
  console.log(n * x * y);
}

calc(2, 5, 3);

function getUser(name) {
  return "Привет, " + name +  "!";
  //всё после return не выполняется
}
console.log(getUser('Андрей'));

let user = getUser('Андрей');

console.log(user);




//function expression - сразу записываем=объявляем функцию в переменную [2ой вид функции]

let car = function(x) {
  return x**x;
};

console.log(car(3));


fabric(); //декларативную можно вызвать до объявления

function fabric(user = 'Андрей', car = 'опель', position = 'менеджер') {
  console.log("Привет, " + user + ". Ты - " + position + " и у тебя " + car);
};

fabric('Ангелина', undefined, 'директор'); //undefined=значение по умолчанию

// let x = 0;

// function recurs() {
//   if(x <= 3) {
//     x++;
//     console.log("Глубина рекурсии: " + x);
//     recurs();
//   }
// }

// recurs();

function shop(param) {
  return param + ', был в магазине'
};

function job(param) {
  return shop(param)
};

console.log(job("Андрей"));