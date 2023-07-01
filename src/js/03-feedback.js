
import _ from 'lodash';
const formEl = document.querySelector(".feedback-form");
const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name = "message"]');

const saveToLocStrg = _.throttle(function(){
    const inputData = {
        email: emailInputEl.value.trim(),
        message: messageInputEl.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}, 500);
emailInputEl.addEventListener('input', saveToLocStrg);
messageInputEl.addEventListener('input', saveToLocStrg);
const extractFromStrg = (function(){ const savedInputData = localStorage.getItem('feedback-form-state');
if (savedInputData) {
  const inputData = JSON.parse(savedInputData);
  emailInputEl.value = inputData.email || '';
  messageInputEl.value= inputData.message || '';
}});
 window.addEventListener('load', extractFromStrg);


 const removeInputData = (function(event){
  event.preventDefault();
const trimmedInputEmailEl = emailInputEl.value.trim();
const trimmedInputMessagelEl = messageInputEl.value.trim();

if (trimmedInputEmailEl ===""|| trimmedInputMessagelEl ==="") {
  alert('Будь ласка, заповніть всі поля форми!');
  return;
}
else
    localStorage.removeItem('feedback-form-state');
    console.log(emailInputEl.value);
    console.log(messageInputEl.value);

 });
 formEl.addEventListener('submit', removeInputData);
 