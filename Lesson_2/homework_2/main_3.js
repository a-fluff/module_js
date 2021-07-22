let x = prompt('Введите число');
let i = 0;
let sum =  0;

while(i <= x) {
  sum += i;
  i++;
}
console.log(sum);


let x = prompt('Введите число');

while(x > 0) {
  if(x % 2 == 0) {
    console.log(x);
  }
  x--;
}