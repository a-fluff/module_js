let btn = document.querySelector('button');
let input = document.querySelector('input');
let reload = document.querySelector('.reload');

let rand = random(1, 10);

btn.onclick = function() {
  let value = input.value;
  let result;
  if(rand === value) {
    result = 'Вы угадали'
  } else {
    result = 'Вы проиграли'
  }

  alert(result);
};

reload.onclick = function() {
  rand = random(1, 10);
  input.value = '';
};

function random(min, max) {
  return (Math.random() * (max - min) + min).toFixed();
};

console.log(rand);