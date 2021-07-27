function getSum(a, b, c) {
  return a + b + c;
};

console.log(getSum(1, 8, 3));



function getSumToX(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSumToX(5));



function getDigitSum(number) {
  let digitSum = 0;
  number = String(number);
  for(let i = 0; i < number.length; i++) {
    digitSum += +number[i];
  }
  return digitSum;
};

console.log(getDigitSum(8081));