//объект как свойство объекта
let person = {
  name: {
    first: "Alessandro",
    second: "Nesta"
  },
  birth: {
    year: 1975,
    place: "Italy"
  }
};

console.log(person.name.first);

person.birth.place = "Rome, Italy";
console.log(person.birth.place);



//функции как свойство объекта = метод объекта
let machine = {
  type: "Coffe grinder",
  makeSound: function() {
    console.log("Drrrrrrrrrrrr!")
  }
};

machine.sayHello = function() {
  console.log("Hello!");
};

machine.makeSound();

machine.sayHello();

console.log(machine);



//ES6: краткое объявление методов
let grut = {
  getUser(){
    console.log("I'm Grut!");
  }
};

grut.getUser();



//массив - это тоже объект
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);


//функция - это тоже объект




//использование this в методах объекта
let user = {
  name: "Oleg",
  introduce: function() {
    console.log("Меня зовут " + this.name); //this и есть наш объект
    console.log(this); //=объект
  }
};

user.introduce();



//this в глобальных функциях
let circleA = {x: 10, y: 12};
let circleB = {x: -4, y: 2};

function coords() {
  console.log("x: " + this.x);
  console.log("y: " + this.y);
};

circleA.printXY = coords;
circleB.teelCoords = coords;

circleA.printXY();
circleB.teelCoords();


function a() {
  console.log(this);
};

//таким образом this это контекст объекта/функции