const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message');

let isvalid = false;
let passwordsMatch = false;

function validateForm(){
    // using constraint API
    isvalid = form.checkValidity();
    console.log(isvalid)
       // style message for error;
    if(isvalid == false){
         
    message.textContent= 'please fill out form';
    message.style.color ='red';
    messageContainer.style.borderColor = 'red';
    return;
    }
    // check to see if password match
    if(password1.value === password2.value){
        passwordsMatch = true;
        password1.style.borderBlockColor ='green'
        password2.style.borderBlockColor ='green'
    }
    else{
        passwordsMatch = false;
        message.textContent = 'make sure password matches';
        message.style.color = 'red'
        messageContainer.style.borderColor ='red';
        password1.style.borderBlockColor = 'red';
        password2.style.borderBlockColor = 'red';
        return;
    }
    // if form is valid and password match
    if(isvalid && passwordsMatch){
        message.textContent = 'successfully registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
    
    
}
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    // do something with user data
    console.log(user)
}


const processFormData = (e) =>{
    e.preventDefault();
    validateForm();
    //  submit data if valid
    if(isvalid && passwordsMatch){
        storeFormData()
    }
}


// event listener
form.addEventListener('submit', processFormData);
