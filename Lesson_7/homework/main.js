//1
function createRandomArr() {
  let arr = [];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  for(let i = 0; i < 20; i++) {
    arr[i] = getRandom(1, 50);
  }

  return arr
}

console.log(createRandomArr());



//2
function createRandomArr2(arrLength, min, max) {
  let arr2 = [];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  for(let i = 0; i < arrLength; i++) {
    arr2[i] = getRandom(min, max);
  }

  return arr2
}

console.log(createRandomArr2(10, 10, 30));



//3
function checkUrl(str) {
  if(str.startsWith('https://') && str.endsWith('.html')) {
    return true
  } else {
    return false
  }
}

console.log(checkUrl('https://127.0.0.1:5500/index.html'));



//4
function getLetterNumber(str, letter) {
  let countLetter = 0;
  let letterCode = letter.charCodeAt();

  for(let i = 0; i < str.length; i++) {
    if(letterCode === str.charCodeAt(i)) {
      countLetter++
    }
  }
  
  return countLetter
}

console.log(getLetterNumber('Сегодня хороший день', 'е'));



//5
function getLetterNumber(str, letter) {
  let countLetter = 0;
  let letterCapitalizedCode = 0;
  let letterLoweredCode = 0;
  let letterCode = letter.charCodeAt();

  if(letter > letter.toUpperCase) {
    letterCapitalizedCode = letter.toUpperCase().charCodeAt();
  } else if(letter < letter.toUpperCase) {
    letterLoweredCode = letter.toLowerCase().charCodeAt();
  }
  
  for(let i = 0; i < str.length; i++) {
    if(letterCode === str.charCodeAt(i) || letterCapitalizedCode ===  str.charCodeAt(i) || letterLoweredCode ===  str.charCodeAt(i)) {
      countLetter++
    }
  }
  
  return countLetter
}

console.log(getLetterNumber('hkfHslth', 'H'));



//6
function getDate() {
  let now = new Date();
  options = {year: 'numeric', month: 'long', day: 'numeric'};
  
  return now.toLocaleDateString('ru', options)
}

console.log(getDate());



//7
function getSecondsToday() {
  let now = new Date();
  return `С текущего дня прошло ${now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()} секунд.`;
}

console.log(getSecondsToday());