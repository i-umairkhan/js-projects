// Accessing DOM Elements
const mainForm = document.getElementById("form");
const mainIput = document.getElementById("input");
const mainDiv = document.getElementById("main");
// API KEY **Private**
const key = "a1fcda43d56ae6c3d755de2a5f4f15d8";
// To store Tempratue value
let temprature;
// Function to call api and sets temprature in kelvins
const getWeather = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => (temprature = data.main.temp));
};
// Function to get input and pass to api
const getLocation = () => {
  const city = mainIput.value;
  if (city) {
    getWeather(city);
  }
};
// Function that shows temprature in calcius on document
const showData = () => {
  mainDiv.innerHTML = `
  ${Math.floor(temprature - 273.17)} °C in ${mainIput.value}
  `;
};
// Calling show function only when enter is pressed in form
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getLocation();
  showData();
});
