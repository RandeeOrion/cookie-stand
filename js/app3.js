'use strict';

var userForm = document.getElementById('user-form');


//this is taking the input, submit and doing what we want to do with it through the fuction handleSubmit
userForm.addEventListener('submit', handleSubmit);
//becuse 'submit' is insdie user-form and thus userForm, you don't have to call it by ID exactly.


//event has to be passed as a paramter so we can call it later. ? I dont really know what this means
function handleSubmit (event){
  event.preventDefault();
  var name = event.target.inputElelementName.value
  console.log('name: ', name );

}

//when submit is hit we can clear the fields with 
// event.target.inputElementName.value = 'null'
