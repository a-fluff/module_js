//1
let input = document.querySelector('input');

input.addEventListener('keyup', () => {
  if(!input.value.startsWith('-') && isNaN(+input.value)) {
    alert('Введите число');
    input.value = '';
  } else if(input.value.startsWith('-') && isNaN(+(input.value.slice(1)))) {
    alert('Введите число');
    input.value = '';
  };
});



//2
let folder = document.querySelector('.folder');

folder.addEventListener('dblclick', () => folder.classList.add('folder--opened'));



//3
let wrapper = document.querySelector('.wrapper');

for(let i = 1; i <= 400; i++) {
  let div = document.createElement('div');
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
  div.style.backgroundColor = '#' + (getRandomNumber(1, 9) * 10000000).toString(16).slice(0, 6);
  wrapper.append(div);
};

wrapper.addEventListener('mouseover', (e) => {
  e.target.classList.add('borderRadius')
});