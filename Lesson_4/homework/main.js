let evenNumbers = [];
for(i = 2; i <= 20; i++) {
				if(i % 2 == 0) {
								evenNumbers.push(i);
				}
};
console.log(evenNumbers);


for(let i = 0; i < evenNumbers.length; i++) {
 		evenNumbers[i] = i * 5;
}
console.log(evenNumbers);

//2ой способ
let result = evenNumbers.map(function(item, index, evenNumbers) {
 				return item = index * 5;
 });
 console.log(result);


let userNumbers = prompt("Введите три числа через запятую");

let arrNumbers = userNumbers.split(", ");

let biggestNumber = +arrNumbers[0];

for(let i = 0; i < arrNumbers.length; i++) {
				if(biggestNumber < +arrNumbers[i]) {
								biggestNumber = arrNumbers[i];
			}
};

console.log(biggestNumber);

//2ой способ
let theBiggest = arrNumbers.reduce(function(prevValue, item) {
				if(+prevValue < +item) {
								return prevValue = item;
								} else {
											return	prevValue;
								}
}, 0);

console.log(theBiggest);