
// Div for interaction 
const passwordValue = document.getElementById('password_value');
const generatePassword = document.getElementById('generate_button');
const pastePassword = document.getElementById('paste_button');

// Div for constraints
const passwordLength = document.getElementById('length');
const passwordLowerCase = document.getElementById('a-z');
const passwordUpperCase = document.getElementById('A-Z');
const passwordNumbers = document.getElementById('0-9');
const passwordSymbols = document.getElementById('~-|');

// Values of the fields chosen for the creation of the password
const az = 'abcdefghijklmnopqrstuvwxyz'
const AZ = az.toUpperCase();
const numbers = '0123456789';
const symbols = "$^*ùm!:;,&é\"'(-è_ç)";

// Default value when loading the DOM
window.addEventListener("DOMContentLoaded", () => {
    passwordValue.value = 'P@ssW0r!_Ex@mp!e';

});

// Launching the password creation logic 
generatePassword.addEventListener('click', () => {
    // Password value at the end of the event
    let generatedPassword = "";
    // Need to know password length
    const lengthPasswordChosen = parseInt(passwordLength.value, 10);
    // Need to know the values chosen for the password
    const dataPassword = [];

    // Ternary to know the content of our array
    passwordLowerCase.checked ? dataPassword.push(az) : undefined;
    passwordUpperCase.checked ? dataPassword.push(AZ) : undefined;
    passwordNumbers.checked ? dataPassword.push(numbers) : undefined;
    passwordSymbols.checked ? dataPassword.push(symbols) : undefined;

    //If no values are selected, put an alert message !
    dataPassword.length === 0 ?  alert('Please select criteria') : undefined;

    //values of our array transform to string to have a uniform selection
    const valuesAvailable = dataPassword.join('');

    //It is time to create the password with all available data !
    for ( let i = 0; i < lengthPasswordChosen; i++) {
        generatedPassword += valuesAvailable.charAt(Math.floor(Math.random() * valuesAvailable.length));
    }
    passwordValue.value = generatedPassword;

});

pastePassword.addEventListener('click', () => {

    if (passwordValue.value === 'P@ssW0r!_Ex@mp!e') {
        alert('Please generate a password first !');
    } else {

        passwordValue.select();
        passwordValue.setSelectionRange(0, 999);
        navigator.clipboard.writeText(passwordValue.value);
        alert("Copy the password: " + passwordValue.value);
        
    }
});