//1
document.querySelectorAll('button')[0].addEventListener('click', () => alert('Я кнопка'));



//2
document.querySelectorAll('button')[1].addEventListener('click', (e) => e.target.textContent = 'button');



//3
let disableBtn = document.querySelector('.disable');
let enableBtn = document.querySelector('.enable');
let input = document.querySelector('input');

disableBtn.addEventListener('click', () => {
  input.setAttribute('disabled', 'disabled');
  input.classList.add('disabled');
});

enableBtn.addEventListener('click', () => {
  input.removeAttribute('disabled', 'disabled');
  input.classList.remove('disabled');
  input.classList.add('enabled');
  setTimeout(() => input.classList.remove('enabled'), 1000);
});



//4
let movable = document.querySelector('.movable');
let prevX;
let prevY;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
};

movable.style.backgroundColor = '#' + (getRandomNumber(1, 9) * 10000000).toString(16).slice(0, 6);
movable.style.width = getRandomNumber(50, 500).toFixed() + 'px';
movable.style.height = getRandomNumber(50, 500).toFixed() + 'px';
movable.style.borderRadius = getRandomNumber(0, 500).toFixed() + 'px';
movable.style.position = 'absolute';

movable.addEventListener('mousemove', mouseMove);
function mouseMove(e) {
  if(prevX && prevY) {
    let shiftX = e.pageX - prevX;
    let shiftY = e.pageY - prevY;
    movable.style.left = +getComputedStyle(movable).left.slice(0, -2) + shiftX + 'px';
    movable.style.top = +getComputedStyle(movable).top.slice(0, -2) + shiftY + 'px';
  };

  prevX = e.pageX;
  prevY = e.pageY;

  let p = document.createElement('p');
  document.querySelector('.output').prepend(p);
  p.innerHTML = `X: ${getComputedStyle(movable).left}, Y: ${getComputedStyle(movable).top}`;
};

movable.addEventListener('mouseout', mouseOut);
function mouseOut(e) {
  prevX = 0;
  prevY = 0;
};