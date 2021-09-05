//1
let select = document.createElement('select');
let countries = [
  {value: 'belarus',
  innerText: 'Беларусь'
  },
  {value: 'russia',
  innerText: 'Россия'
  },
  {value: 'ukraine',
  innerText: 'Украина'
  },
  {value: 'poland',
  innerText: 'Польша'
  },
  {value: 'germany',
  innerText: 'Германия'
  },
  {value: 'france',
  innerText: 'Франция'
  },
  {value: 'italy',
  innerText: 'Италия'
  },
  {value: 'spain',
  innerText: 'Испания'
  },
  {value: 'usa',
  innerText: 'США'
  },
  {value: 'china',
  innerText: 'Китай'
  }
];

for(let i = 0; i < countries.length; i++) {
  let option = document.createElement('option');
  option.value = countries[i].value;
  option.innerText = countries[i].innerText;
  select.append(option);
};

document.body.prepend(select);
select.onchange = function() {
  console.log(select.value + ', ' + select.options[select.selectedIndex].text);
};



//2
let initialSum = document.getElementById('initial-sum');
let term = document.getElementById('term');
let capitalization = document.getElementById('capitalization');
let initialSumOutput = document.querySelector('.initial-sum');
let resultSumOutput = document.querySelector('.result-sum');
let initialSumGraph = document.querySelector('.initial-sum-graph');
let resultSumGraph = document.querySelector('.result-sum-graph');
let rate = 12;

initialSumOutput.innerHTML = initialSum.value;
getResultSum();

initialSum.addEventListener('input', function() {
  if(initialSum.value > 1000000000 || initialSum.value < 100) {
    initialSum.classList.add('error');
  } else {
    initialSumOutput.innerHTML = initialSum.value;
    getResultSum();

    if(initialSum.classList.contains('error')) {
      initialSum.classList.remove('error');
    };
  };
});

term.addEventListener('change', function() {
  getResultSum();
});

capitalization.addEventListener('change', function() {
  getResultSum();
});

function getResultSum() {
  let resultSum = Math.round(+initialSumOutput.innerHTML + (+initialSumOutput.innerHTML * rate/100 * term.value/12));
  let resultSumWithCapitalization = Math.round(+initialSumOutput.innerHTML * Math.pow((1 + rate/100/12), term.value));

  if(capitalization.checked) {
    resultSumOutput.innerHTML = resultSumWithCapitalization;
    resultSumGraph.style.height = resultSumWithCapitalization/initialSumOutput.innerHTML*100 + 'px';
  } else {
    resultSumOutput.innerHTML = resultSum;
    resultSumGraph.style.height = resultSum/initialSumOutput.innerHTML*100 + 'px';
  };
};