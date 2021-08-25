//Получение всех форм
let forms = document.forms;

console.log(forms);


//Получение формы по атрибуту name
let loginForm = document.forms.login;

console.log(loginForm);


//Получение контрола формы
let formElements = loginForm.elements;

console.log(formElements.password);


//Получение значения элемента формы
let nameFeedback = document.forms.feedback.name;
console.log(nameFeedback.value);

nameFeedback.value = 'Leo'
console.log(nameFeedback.value);


//Получение и изменение значения элемента формы
let rememberLogin = document.forms.login.remember;

console.log(rememberLogin.checked);

rememberLogin.checked = true;
console.log(rememberLogin.checked);


let formFeedback = document.forms.feedback.from;
console.log(formFeedback.options);
console.log(formFeedback.value);

formFeedback.value = 'russia';
console.log(formFeedback.value);



//События формы: focus, blur
let userLogin = document.forms.login.name;
console.log(userLogin);

userLogin.addEventListener('focus', function() {
  console.log('In focus');
  this.value = 'Focus';
});

userLogin.addEventListener('blur', function() {
  console.log('Out of focus');
  this.value = 'Blur';
});



//focusin & focusout - то же самое, что и focus & blur, но со всплытием
loginForm.addEventListener('focusin', function() {
  console.log(this);
});



//Срабатывает в момент потери фокуса
nameFeedback.addEventListener('change', function() {
  console.log(this.value);
});


let emailFeedback = document.forms.feedback.email;
emailFeedback.addEventListener('input', function() {
  console.log(this.value);
});