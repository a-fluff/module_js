//№1
let obj = {
  a: 1,
  b: 2,
  c: 3
};

//первый способ вывода
console.log(obj.c);

//второй способ вывода
let c = obj.c;
console.log(c);

for(let key in obj) {
  console.log(key + ": " + obj[key]);
};




//№2
let city = {};

city.name = "Belarus";
city.population = "9.467 mln";




//№3
let belarusCity = [
  {
    name: "Minsk",
    population: "1.975 mln"
  },
  {
    name: "Vitebsk",
    population: "0.363 mln"
  },
  {
    name: "Belarus",
    population: "9.467 mln"
  },
  {
    name: "Mogilev",
    population: "0.38 mln"
  },
  {
    name: "Gomel",
    population: "0.509 mln"
  },
  {
    name: "Brest",
    population: "0.344 mln"
  },
  {
    name: "Grodno",
    population: "0.369 mln"
  }
];




//№4
function getInfo(belarusCity) {
  for(let i = 0; i < belarusCity.length; i++) {
    for(let key in belarusCity[i]) {
      console.log(`${key}: ${belarusCity[i][key]}`);
    };
  };
};

getInfo(belarusCity);