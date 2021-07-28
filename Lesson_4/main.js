//массив

let arr = [];
let arrNumbers = [1, 2, 3, 4, 5];
let arrWords = ["coffee", "tea", "milk"];
let arrAny = [1, "tea", true, 1+1];

console.log(arr);
console.log(arrNumbers);
console.log(arrWords);
console.log(arrAny);



//доступ к элементам массива

console.log(arrWords[2]);



//изменение массива

arrWords[0] = "water";
console.log(arrWords);



//длина массива +изменение длины

let months = ["june", "july", "august", "semptember"];
console.log(months.length);
months[4] = "November;"
console.log(months.length);

months.length = 2;
console.log(months);
console.log(months.length);



//методы массивов


//pop+push

//pop() удаляет и возвращает последний элемент массива

let names = ["Bill", "Bob", "Joe", "Lukas"];

let lastElementArr = names.pop();

console.log(lastElementArr);
console.log(names);

//push() добавляет элемент в конец массива (самый распространенный при работе с массивами)

names.push("Michel");
console.log(names);


//shift+unshift

//shift() удаляет и возвращает первый элемент массива 

let firstElementArr = names.shift();

console.log(firstElementArr);
console.log(names);

//unshift() добавляет элемент в начало массива 

names.unshift("Duo");
console.log(names);



//перебор элементов массива

let autos = ["Audi", "BMW", "Reno", "Pegot", "Tesla", "Subaru"];

for(let i = 0; i < autos.length; i++) {
  console.log(i, autos[i]);

  autos[i] = autos[i] + " :auto " + i;
}
console.log(autos);



//многомерные массивы=матрицы (массив внутри другого массива)

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0]);
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);



//метод массива join() склеивает элементы массива в одну строку. В скобках аргумент в качестве разделителя

let autosArr = ["Audi", "BMW", "Reno", "Pegot", "Tesla", "Subaru", true];
let arrJoin = autosArr.join("-");

console.log(arrJoin);


//метод массива split() разбивает строку на массив

let arrSplit = arrJoin.split("-");
console.log(arrSplit);

arrSplit = arrJoin.split("e");
console.log(arrSplit);

arrSplit = arrJoin.split("-", 3); //второй аргумет отвечает за длину массива
console.log(arrSplit);


//метод массива: slice(start, end) копирует часть массива от индекса start включительно до конца end не включая его

let letters = ["a", "b", "c", "d", "e", "f"];

let part = letters.slice(1, 3);
let part2 = letters.slice(2); //если второй параметр не указан, то от заданного до конца
console.log(part, part2);


//метод массива: splice(start, deleteCount, elem1, ..., elemN)
//deleteCount количество удаляемых элементов из массива
//начиная с индекса start вставляет на их место элементы elem1, ..., elemN
//возвращает массив из удалённых элементов

let deleteLetters = letters.splice(1, 2, "o", "q", "p"); //удаляем 2 буквы начиная с b

console.log(letters);
console.log(deleteLetters);


//метод массива: concat() создает и возвращает новый массив, в который копируются все элементы из массива и все аргументы

let animals = ["cat", "dog"];

let newAnimals = animals.concat("cow", "horse");
console.log(newAnimals);

animals = animals.concat(letters);
console.log(animals);


//метод массива: reverse()

let country = ["Belarus", "Russia", "China"];
console.log(country.reverse());


//метод массива: sort() сортирует в алфавитном порядке

let words = ["summ", "abc", "lol", "cat"];
console.log(words.sort());



//Задача на собеседовании: вывести строку "Я люблю javascript" в обратном порядке
let a = "Я люблю javascript";
console.log(a.split("").reverse().join(""));