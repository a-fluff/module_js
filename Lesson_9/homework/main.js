let table = document.getElementById('age-table');
let labels = table.querySelectorAll('label');
console.log(labels);


console.log(table.rows[0].cells[0]);


let secondForm = document.getElementsByTagName('form')[1];
console.log(secondForm);


let searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);


console.log(searchForm.getElementsByTagName('input')[0]);


console.log(document.querySelector('[name="info[0]"]'));


console.log(secondForm.querySelector('[name="info[0]"]')); 


let searchBtn = document.querySelectorAll('[value="Искать!"]')[1];
let labelOfSelect = document.createElement('label');
let select = document.createElement('select');

select.style.marginRight = '10px';
labelOfSelect.textContent = 'Пол: ';
labelOfSelect.append(select);
select.innerHTML = '<option value="female">Ж</option><option value="male">М</option>';
labelOfSelect.id = 'gender';
select.id = 'gender';
searchBtn.before(labelOfSelect);