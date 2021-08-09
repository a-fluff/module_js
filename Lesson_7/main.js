//метод toString()
let number = 123;
let boolean = false;
let str = 'Hello';

console.log(number.toString(), boolean.toString(), str.toString());



//метод parseInt() и parseFloat()
let px = '14px';
let rem = '1.5rem';
let err = '1px2rem';

console.log(parseInt(px), parseFloat(rem), parseInt(err));



//метод toFixed()
let fixed = 12345.12345;

console.log(fixed.toFixed(), fixed.toFixed(2), fixed.toFixed(5))



//Math
let pi = Math.PI;
let e = Math.E;

console.log(pi, e);



//полезные методы Math
let random = Math.random();
let max = Math.max(123, 2, -2, 400);
let min = Math.min(123, 2, -2, 400);

console.log(random, max, min);



//String.lenth
let string = 'Hello, Adukar'

console.log(string.length);



//escape
let newStr = 'Это строка \n будет \r перенесена \' ';
console.log(newStr);



//доступ к отдельным символам строки
let word = 'Адукар';

console.log(word.charAt(3), word[0], word[word.length - 1]);



//toLowerCase() и toUpperCase()
let lower = 'Я хочу работать!';
let upper = 'Я не хочу работать';

console.log(lower.toLowerCase(), upper.toUpperCase());



//методы String: slice() / substr(), trim(), repeat()
let repeat_and_trim = '     Это             строка скопирована!   ';

console.log(repeat_and_trim.trim() + ' , ' + repeat_and_trim.repeat(4));



//методы String: indexOf и lastIndexOf
let index = 'Я сегодня стал в 8:00';

console.log(index.indexOf('8'));
console.log(index.lastIndexOf('8'));



//Новые (E6) методы поиска в String()
let includes = 'Сегодня отличный день!';

console.log(includes.includes('отличный'));
console.log(includes.includes('вчера'));
console.log(includes.startsWith('день!'));
console.log(includes.endsWith('день!'));



//charCodeAt() /можно использовать например для онлайн-пианино
// let x = 'x';
// console.log(x.charCodeAt()); //120

let x = 'xy';
console.log(x.charCodeAt(1)); //121



//сравнение строк
console.log('a' > 'A', 'a'.charCodeAt(), 'A'.charCodeAt());



//Новое в ES6: шаблонные литералы = интерполяция ${} 
let temp = 30;
console.log(`Сегодня ${temp > 25 ? 'жарко' : 'холодно'}!`);






//Дата и время: объект Date
let date = new Date(1990, 0, 1, 0, 0); //03 день недели
console.log(date);

date.setFullYear(2010);
date.setMonth(06);
date.setDate(22);

console.log(`
Год: ${date.getFullYear()},
Месяц: ${date.getMonth()},
День: ${date.getDate()},
`);

//библиотека для работы с временем  -  moment.js



//полезные методы Date
dateMoment = new Date();
console.log(dateMoment.getTime());



//выводы даты в разных форматах
let dates = new Date();

console.log(dates.toLocaleDateString());
console.log(dates.toISOString());



//Date: миллисекунды от 01.01.1970
console.log(`
${Date.parse('2020-04-04')},
${Date.now()} //=getTime
`);

//! Date.now() = getTime()