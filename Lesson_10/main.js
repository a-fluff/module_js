let eventListner = document.querySelector('.eventListner');
let eventDOM = document.querySelector('.eventDOM');
let eventButton = document.querySelector('.eventButton');
//
window.addEventListener('DOMContentLoaded', function() {
  console.log('I am ready');
});


//обработка событий
function eventAttribute() {
  alert('Hello!');
};


eventDOM.onclick = function() {
  alert('Hello, I am event DOM');
};


eventListner.addEventListener('click', function() {
  alert('Hello, I am addEventListner');
  // eventListner.removeEventListener('click', function() { //!убрать обработчик событий
  // })
});


eventButton.addEventListener('click', function(e) {
  console.log(e);
});



//события мыши
let red = document.querySelector('.red');

red.addEventListener('mouseover', handleMouseover);
red.addEventListener('mouseout', handleMouseout);
red.addEventListener('mousemove', handleMousemove);

function handleMouseover() {
  red.classList.add('borderRadius');
  console.log('Mouse over');
};

function handleMouseout() {
  red.classList.remove('borderRadius');
  console.log('Mouse out');
};

function handleMousemove(event) {
  console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
};



//события клавиатуры
document.addEventListener('keydown', function(event) {
  let code = event.keyCode;

  if(code == 13) {
    handleMouseover()
  }
});

document.addEventListener('keyup', function (event) {
  let code = event.keyCode;

  if(code == 13){
      handleMouseout()
  }
});



//всплытие событий
let yellow = document.querySelector('.yellow');
let black = document.querySelector('.black');
let green = document.querySelector('.green');

yellow.addEventListener('click', function() {
  console.log('It is yellow');
});

black.addEventListener('click', function(e) {
  e.stopPropagation(); //отмена всплытия
  console.log('It is black');
});

green.addEventListener('click', function() {
  console.log('It is green');
});


//event.target
let blue = document.querySelector('.blue');

blue.addEventListener('click', function(e) {
  e.target.classList.add('borderRadius');
});



//Действие браузера по умолчанию
let link = document.getElementsByClassName('adukar')[0];

link.onclick = function(e) {
  e.preventDefault();
};

//Делегирование событий
let wrapper = document.getElementsByClassName('wrapper')[0];

for(let i = 0; i < 100; i++) {
  let createElement = document.createElement('div');
  createElement.textContent = i;
  wrapper.appendChild(createElement);
};

wrapper.addEventListener('click', function(e) {
  let target = e.target;

  if(target.className == 'wrapper') {
    return
  }

  target.classList.add('borderRadius');
  console.log(target);
});