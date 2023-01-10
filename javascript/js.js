// Variaveis e seleção de elementos
//minuto 50 do video

const apiKey = "ff6a72f333f38787bd98c300518c17ad";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//Funções

const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
}

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);
  
  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
  weatherContainer.classList.remove("hide");
};



//Eventos

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if(e.code === "Enter"){
    const city = e.target.value;
    showWeatherData(city);
  }
}
);

//API UNSPLASH //


const clientID = "erX0x-Y2_48eC1fTXd78TO0I0luXH6CuchEfz3SZn0Q";
let endpoint = `https:api.unsplash.com/photos/random?client_id=${clientID}`;
let imageElement = document.querySelector("#weather-body-background");


fetch(endpoint)
  .then(function(response){
    return response.json();
  })

  .then(function(jsonData) {
    console.log(jsonData);
    imageElement.style.background = jsonData.urls.regular;
  })










