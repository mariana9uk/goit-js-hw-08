
import _ from 'lodash';
const formEl = document.querySelector(".feedback-form");
const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name = "message"]');

const saveToLocStrg = _.throttle(function(){
    const inputData = {
        email: emailInputEl.value,
        message: messageInputEl.value
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
}})
 window.addEventListener('load', extractFromStrg);
 const removeInputData = (function(){
    localStorage.removeItem('feedback-form-state');
   
 })
 const logData=(function(){ console.log(emailInputEl.value);
    console.log(messageInputEl.value);})
 formEl.addEventListener('submit', removeInputData);
 formEl.addEventListener('submit', logData);