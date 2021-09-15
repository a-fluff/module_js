let newButtonExpenses = document.querySelector('.expenses');
let newButtonIncome = document.querySelector('.income');

let formOperation = document.querySelector('.operation__form');

let btnNewExpenses = document.querySelector('.js-add-operation');
let newExpensesSumm = document.querySelector('.operation__summ');
let newExpensesCategory = document.querySelector('.operation__category');
let newExpensesDate = document.querySelector('.operation__date');

let flagOperation = null;

newButtonExpenses.addEventListener('click', function(){ renderFormOperation('expenses') });
newButtonIncome.addEventListener('click', function(){ renderFormOperation('income') });
btnNewOperation.addEventListener('click', addOperation);

function renderFormOperation(operation) {
  flagOperation = operation;

  newOperationSumm.placeholder = `Sum ${operation}`;
  btnNewOperation.value = `Add ${operation}`;

  toggleFormOperation();
};

function toggleFormOperation() {
  formOperation.classList.toggle('operation__form--hidden');
};


function addOperation(e) {
  e.preventDefault();

  let valueSum = newExpensesSumm.value;
  let valueCategory = newExpensesCategory.value;
  let valueDate = newExpensesDate.value;

  let newOperation = {
    sum: valueSum,
    category: valueCategory,
    date: valueDate,
    status: flagOperation
  };

  total.push(newOperation);

  clearForm();

  console.log(total);
};

function renderExpensesCategories() {
  let selectCategories = document.querySelector('.operation__category');

  selectCategories.innerHTML = `<select value="">Select category</select>`;

  categories.forEach(function(category) {
    let option = document.createElement('option');

    option.value = category;
    option.textContent = category;
    selectCategories.appendChild(option);
  })
};

function renderExpensesDate(){
  let dateExpenses = document.querySelector('.operation__date');

  dateExpenses.value = new Date().toISOString().slice(0, 10);
};

function clearForm() {
  newOperationSum.value = '';

  renderExpensesCategoryes();
  renderExpensesDate();
};