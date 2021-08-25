let str = 'I love JavaScript (ES6). I am Front-end developer';

let regexp = new RegExp('script', 'i');
let regexpShort = /short/i; //c флагом i

console.log(regexp.test('JavaScript')); //true
console.log(regexpShort.test('I am the short expression')); //true
console.log(regexp.test(str)); //true

console.log(str.search(/love/i)); //2

console.log(str.match(/a/));
console.log(str.match(/a/).index, str.match(/a/).input);


//Классы символов
console.log(str.match(/\d/g)); //6
console.log(str.match(/\s/g)); //пробельный символ
console.log(str.match(/\w/g));
console.log(str.match(/\D/g));
console.log(str.match(/\I/gi)); //граница слова - начало/конец слова, не работает с кириллицей
console.log(str.match(/\B/gi));
console.log(str.match(/^i/gi)); //начало строки