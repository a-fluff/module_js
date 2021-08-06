let input = document.querySelector('.add-item__input');
let addButton = document.querySelector('.add-item__button');
let toDo = document.querySelector('.to-do');

let items = [];

addButton.onclick = function() {
  let value = input.value;
  if(value) {
    items.push(input.value);
    input.value = '';
  
    render()
  } else {
    alert('Error');
  }

};

function render() {
  clearToDo();

  for(let i = 0; i < items.length; i++) {
    toDo.innerHTML += `<li>${items[i]}<button onclick="deleteItem(${i})">X</button></li>`;
  }
}

function clearToDo() {
  toDo.innerHTML = '';
}

function deleteItem(i) {
  items.splice(i, 1);
  render();
  //console.log(i)
}