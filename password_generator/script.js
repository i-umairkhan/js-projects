const pwEl = document.getElementById('pw');
const formEl = document.getElementById('form');
const lengthEl = document.getElementById('length');
const numbersEl = document.getElementById('numbers');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+=";

const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
const getUpper = () => upperLetters[Math.floor(Math.random() * upperLetters.length)];
const getLower = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
const getSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

