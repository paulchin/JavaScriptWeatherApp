const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");

btnWeather.onclick = function(){
  const city = txtCity.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  fetch(url).then(response => {
  response.json().then(json => {
    let data = json;
    formatResponse(data);
  });
});
}

function kelvinToFahrenheit(kTemp){
  const fTemp = kTemp * (9/5) - 459.67;
  return fTemp;
}

function formatResponse(data){
  console.log(data);
  let out = `<h1>Current Condtions for ${data.name}</h1>
  <p><strong>Temperature:</strong> ${Math.round(kelvinToFahrenheit(data.main.temp))}`



  console.log(out);
}
