document.addEventListener("DOMContentLoaded", function() {
    // Cambia la URL del background del body con un timestamp único
    document.body.style.backgroundImage = `url("https://picsum.photos/1920/1089?random=${Date.now()}")`;
  });
  const key = "a4e0829f2f0b2da41ff64a1a21034565";

  function putDataOnScreen(data) {
   console.log(data);
    document.querySelector(".city").innerHTML = "Weather in " +  data.name;
    document.querySelector(".degrees").innerHTML  = Math.floor(data.main.temp) + "°C";
    document.querySelector(".forecast").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% Humidity";
    document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

   }   
  async function searchCity(city) {
     const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json( ));
     putDataOnScreen(data);
  }

  function  onClick() {
     const city = document.querySelector(".city-input").value 
     searchCity(city);
  }