//создание объекта
let passObj = {
  number: "MC123456",
  name: "Hanna",
  surname: "Smith",
  birthdate: "1954-07-12"
};

let car = {};



//получение доступа к значению
//1 способ
console.log(passObj.number);

let name = passObj.name;
console.log(name);

//2ой способ
let surname = passObj["surname"];
console.log(surname);



//наполнение объекта данными
console.log(car); //пустой

car.name = "Audi";
car.color = "Red";
car.age = "10";

car["DTP"] = "2";
car["DTP"] = "4"; //свойство перезапишется с 2 на 4

console.log(car);



//проверка на наличие свойства - возвращает true/false
//оператор in
console.log("name" in car);
console.log("headlights" in car);



//доступ к несуществующим свойствам
console.log(car.headlights); //возвращает underfined



//объявление свойств с "плохими" именами
let country = {
  name: "America",
  "10count car": 99999,
};

console.log(country);
//доступ к этим свойствам
console.log(country["10count car"]);



//удаление свойств - оператор delete
console.log(car);
delete car.DTP;
console.log(car);



//перебор свойств объекта
for(let key in car) {
  console.log(key + ": " + car[key]); //! key только через []
};



//объект - ссылочный тип данных
let person = {
  name: "Andrew",
  age: "23",
  height: "181cm"
};

let newPerson = person;

person.age = "45";

console.log(person);
console.log(newPerson);

//! свойство объекта можно менять, даже если сам объект константа



//клонирование объектов
let personClone = {};

for(let key in person) {
  personClone[key] = person[key];
};

person.name = "Dima";

console.log(person, personClone);