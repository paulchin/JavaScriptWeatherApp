const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");

btnWeather.onclick = function(){
  let city = txtCity.value;
  let URL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  
}
