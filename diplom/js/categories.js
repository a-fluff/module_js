let newCategory = document.querySelector('.js-category');
let btnNewCategory = document.querySelector('.js-add-category');

let listCategory = document.querySelector('.categories__list');

btnNewCategory.addEventListener('click', addCategory);

listCategory.addEventListener('click', funcCategory);

//Флаг, означающий редактируемую категорию
let statusEditCategory = false;

function addCategory(e) {
  e.preventDefault();

  let value = newCategory.value;

  //Валидация новой категории
  if(validateCategory(value)) {
    return 
  }

  //Добавление категории в глобальную переменную
  categories.push(value);
  
  //Перерендер всех категорий
  renderCategory();

  //Очистка поля ввода
  newCategory.value = '';
  
  console.log(categories);
};

function validateCategory(category) {
  let hasError = false;
  
  if(category === '') {
    hasError = true;
  } else if(categories.includes(category)) {
    hasError = true;
  };

  return hasError;
};


//Рендер списка категорий
function renderCategory() {
  listCategory.innerHTML = '';

  categories.forEach(function(category,) {
    listCategory.appendChild(templateItemCategory(category));
  })
};

//Создание списка категорий
function templateItemCategory(name) {
  let wrapperItem = document.createElement('div');
  wrapperItem.className = 'categories__item';

  let textItem = document.createElement('p');
  textItem.className = 'categories__name';
  textItem.textContent = name;

  wrapperItem.appendChild(textItem);

  let renameItem = document.createElement('button');
  renameItem.className = 'categories__rename button';
  renameItem.textContent = 'Rename';

  wrapperItem.appendChild(renameItem);

  return wrapperItem;
};

function funcCategory(e) {
  let target = e.target;
  if((target.classList.contains('categories__rename')) && !statusEditCategory) {
    renameCategory(target.parentElement);
    statusEditCategory = true;
  };
};

function renameCategory(parentElement) {
  let pCategory = parentElement.querySelector('.categories__name');
  let oldCategory = pCategory.textContent;

  // pCategory.textContent = '';

  // let newInput = document.createElement('input');
  // newInput.value = oldCategory;
  // pCategory.appendChild(newInput);

  let wrapperItem = document.createElement('div');
  wrapperItem.className = 'categories__item';

  let inputItem = document.createElement('input');
  inputItem.className = 'categories__name';
  inputItem.value = oldCategory;

  wrapperItem.appendChild(inputItem);

  let editItem = document.createElement('button');
  editItem.className = 'categories__edit button';
  editItem.textContent = 'Edit';

  wrapperItem.appendChild(editItem);

  listCategory.replaceChild(wrapperItem, parentElement);

  editItem.addEventListener('click', function() {
    categories.forEach(function(category, index) {
      if(category === oldCategory) {
        categories[index] = inputItem.value;

        renderCategory();
      };
    });
    statusEditCategory = false;
  });
};