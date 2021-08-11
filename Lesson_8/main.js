//
function createFunc() {
  let cube = function(x) {
    return x*x*x;
  }
  return cube;
}

//console.log(createFunc());

let powerOfTree = createFunc();

console.log(powerOfTree(3));



//замыкание
function createFunction(y) {
  console.log(y);

  function add(x) {
    return y + x;
  };

  return add;
};

let result = createFunction(3);

console.log(result(10));



//анонимные функции
(function() {
  console.log('It is anonimus');
})();



function cube(x, callback) {
  return callback(x);
};

console.log(cube(3, function(y) {
  return y * 2;
}));



//метод массивов forEach
let cars = ['Audi', 'Reno', 'Pegot', 'Mersedes', 'Ferarri'];
cars.forEach(function(item, index, arr) {
  console.log(item, index);
});



//метод filter
let filterCars = cars.filter(function(item, index) {
  return index % 2 == 0; //нечетные
});

console.log(filterCars);



//метод map
let mapCars = cars.map(function(item, index) {
  return item.toUpperCase();
});

console.log(mapCars);



//метод reduce
let reduceCars = cars.reduce(function(prev, item) {
  return `${prev}, ${item}`;
});

console.log(reduceCars);



//методы every и some
let every = cars.every(function(item) {
  //return typeof(item) === 'string';
  return item.length == 4;
});

console.log(every);


let some = cars.some(function(item) {
  return item.length == 4;
});

console.log(some);



//метод find
let find = cars.find(function(item) {
  return item.length == 8;
});

console.log(find);



//метод findIndex
let findIndex = cars.findIndex(function(item) {
  return item.length == 8;
});

console.log(findIndex);



//метод sort
function sorting(first, second) {
  if(first.length > second.length) {
    return 1
  } else if(first.length < second.length) {
    return -1
  } else {
    return 0
  }
}

let sort = cars.sort(sorting);

console.log(sort);