//Глобальный объект window
var a = 10;
let b = 10;
console.log(window.a); //10
console.log(window.b); //undefined



//Структура дерева DOM
//получение всего html
let html = document.documentElement;
console.log(html);

//получение head
let head = document.head;
console.log(head);

//получение body
let body = document.body;
console.log(body);



//навигация по DOM
//получение дочерних элементов
let childNodes = document.body.childNodes;
console.log(childNodes);

//получение первого дочернего элемента
let firstChild = document.body.firstChild;
console.log(firstChild);

//получение последнего дочернего элемента
let lastChild = document.body.lastChild;
console.log(lastChild);

//получение первого дочернего элемента без текстовых узлов и комментариев
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild);



//поиск по дереву DOM
//поиск по ID
let searchID = document.getElementById('idText'); //!возвращает узел
console.log(searchID);

//поиск по тегу
let searchTag = document.getElementsByTagName('p'); //!возвращает коллекцию
console.log(searchTag);

//поиск по классу
let searchClass = document.getElementsByClassName('child'); //!возвращает коллекцию
console.log(searchClass);



//поиск по селектору
let searchQuerySelectorAll = document.querySelectorAll('.child');
console.log(searchQuerySelectorAll);

//возвращает 1ый элемент
let searchQuerySelector = document.querySelector('.child');
console.log(searchQuerySelector);

//tagName
let tagClass = document.getElementsByClassName('text');
console.log(tagClass[0].tagName);
console.log(tagClass);



//изменить или получить содежимое
console.log(tagClass[0].innerHTML); //!обращаемся к элементу, а не коллекции
tagClass[0].innerHTML = 'Hello world!';

searchClass[0].innerHTML = 'Hello world!';
console.log(searchClass[0]);

console.log(document.body.firstChild.data);

searchClass[0].innerHTML = '<p>Hi</p>';
console.log(searchClass[0].textContent);



//работа с атрибутами
//прровекра налияич атрибута hasAtribute
let input = document.getElementById('lastname');
console.log(input.hasAttribute('name'));
console.log(input.hasAttribute('class'));

//получение значения атрибута
console.log(input.getAttribute('name'));

//изменение значения атрибута
input.setAttribute('name', 'email');
console.log(input.getAttribute('name'));



//свойство по атрибутам
let link = document.getElementsByClassName('link')[0];
console.log(`До href ${link.href}`);

link.id = 'linkAdukar';
link.href = 'https://adukar.by'
console.log(`После href ${link.href}`);



//изменение страницы
//создание нового элемента
let create = document.createElement('div');
create.id = 'car';
create.className = 'carName auto';
create.textContent = 'It is autos';

link.before(create);


//работа с классами
let auto = document.getElementById('car');
auto.className = 'carNames autos';

//проверка существования класса
console.log(auto.classList.contains('autos'));

//добавление нового класса
auto.classList.add('good');

//удаление класса
auto.classList.remove('carNames');

//
auto.classList.toggle('good');

//замена классов
auto.classList.replace('autos', 'automobiles');



//работа со стилями
//!возвращает/задаёт инлайновые стили
auto.style.color = 'red';
console.log(auto.style.color);
auto.style.textTransform = 'uppercase';

//!стили в 2 слова пишут camel case-ом

auto.style.background = '#444';
let radio = 50;
auto.style.borderRadius = radio + '%';


//работаем как с объектами
let div = {
  innerHTML: '<p>It is good!</p>',
  textContent: 'It is good',
  id: '#text',
  className: 'textGood',
  classList: {}
};