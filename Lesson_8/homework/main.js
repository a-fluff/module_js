//1
function counterFactory(start, step) {
  return function tictoc() {
    return start += step;
  };
};

let count = counterFactory(1, 2);

console.log(count());
console.log(count());
console.log(count());



//2
function tictoc(start, step) {
  return function() {
    return start += step;
  };
};

function take(tictoc, x) {
  let arr = [];

  for(let i = 0; i < x; i++) {
    arr[i] = tictoc();
  };

  return arr;
};

console.log(take(tictoc(1, 2), 4));



//3
let str = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв «с» во всех элементах массива.';

let arr = str.split(' ').map(function(item) {
  if(item.endsWith(',') || item.endsWith('.')) {
    return item.slice(0, -1);
  } else {
    return item;
  };
});

function decrease(a, b) {
  if(a.length < b.length) {
    return 1
  } else if (a.length > b.length) {
    return -1
  } else {
    return 0
  };
};

arr.sort(decrease);

function backwards() {
  return arr.map(function(item) {
    return item.split('').reverse().join('');
  });
};

console.log(backwards());

function numberOfLetters() {
  let count = 0;
  
  arr.forEach(function(item) {
    if(item.includes('с')) {
      count++
    }
  });

  return count;
};

console.log(numberOfLetters());