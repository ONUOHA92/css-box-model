// let me do the selection first
const form = document.getElementById('form')
const username = document.getElementById('userName');
const email = document.getElementById('email');
const firstname = document.getElementById('FirstName');
const Lastname = document.getElementById('LastName');
const password = document.getElementById('password');
const select = document.getElementById('field');
const Submit = document.getElementById('submit');

// to manupulate
userNameInput = (e) => {
  e.preventDefault();
 if(username.value.length > 5) {
         console.log(username.value);
    username.value = "";
 }
 if(Lastname.value.length > 5) {
         console.log(Lastname.value);
    Lastname.value = "";
 }
 
 if(email.value.length > 5) {
     console.log(email.value)
     email.value = "";
 }
    

 if(firstname.value.length > 5) {
         console.log(firstname.value);
    firstname.value = "";
 }
 if(password.value.length > 5) {
         console.log(password.value);
    password.value = "";
 }
  
}
form.addEventListener('submit', userNameInput)
