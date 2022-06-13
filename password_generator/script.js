// DOM Elements
const pwEl = document.getElementById('pw');
const formEl = document.getElementById('form');
const lengthEl = document.getElementById('length');
const numbersEl = document.getElementById('numbers');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
// Chrecters for Password
const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+=";
// Getting Random Chracter
const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
const getUpper = () => upperLetters[Math.floor(Math.random() * upperLetters.length)];
const getLower = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
const getSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
// Main Password variable
let password = '';
//Function to check cheackbox and return random value
const getRandom = () => {
    let chrecters = [];
    if (numbersEl.checked) {
        chrecters.push(getNumber());
    }
    if (uppercaseEl.checked) {
        chrecters.push(getUpper());
    }
    if (lowercaseEl.checked) {
        chrecters.push(getLower());
    }
    if (symbolsEl.checked) {
        chrecters.push(getSymbol());
    }
    return chrecters.length === 0 ? '' : chrecters[Math.floor(Math.random() * chrecters.length)];
};
// Function to return password of specific length
const generatePassword = () => {
    for (let i = 0; i < lengthEl.value; i++) {
        password += getRandom();
    }
}
// Showing password
generateEl.addEventListener('click', () => {
    password = '';
    generatePassword();
    pwEl.innerText = password;
})
// Clipboard functionality
clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(password);
})

