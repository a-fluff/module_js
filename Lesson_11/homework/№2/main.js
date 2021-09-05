//1
console.log('Забыл, ... тебя как зовут? ... Аня?'.match(/\.\.\./g));



//2
let positiveNumbers = /[^-]\d+(\.\d+)?/g;

console.log('Their numbers are: -8, 5, 100, 1.2, 78.632 and 36.6'.match(positiveNumbers));



//3
let regexppp = /#([0-9a-f]{3}){1,2}\b/gi;

let string = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(string.match(regexppp) ); // #3f3 #AA00ef



//4 Пустая строка
console.log(/^$/.test(''));



//5
let registrationForm = document.forms.registration;
let password = registrationForm.password;
let errorPass = document.querySelector('input[name="password"] + p');

password.addEventListener('input', function() {
  let regExp = /(?=.*\w)(?=.*\d)(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\.\?\/])[\w\d\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\.\?\/]{6,}/i;
  
  if(regExp.test(password.value)) {
    errorPass.textContent = '';
    errorPass.className = 'error';
  } else {
    showError();
  }
});

function showError() {
  if(password.validity.valueMissing) {
    errorPass.innerHTML = 'Введите пароль';
  } else if(password.validity.tooShort) {
    errorPass.innerHTML = 'Пароль должен быть длиннее 6 знаков.';
  } else {
    errorPass.innerHTML = 'Пароль должен содержать хотя бы одну цифру, один спецсимвол и одну букву.';
  };

  errorPass.classList.add('error');
};

registrationForm.addEventListener('submit', function(e) {
  if(password.validity.valid) {
    alert(`Поздравляем, ${registrationForm.login.value}! Вы зарегистрированы.`);
  } else {
    showError();
    e.preventDefault();
  }
});