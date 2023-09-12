async function fetchWeather() {
  const apiKey = "27c534833eeefa8cb0959cb9839cce77";
  const queriedCity = document.querySelector("#city").value;

  if (queriedCity == "") {
    alert("Please write a city to fetch");
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);

    // Destructuring
    const {
      main: { temp, feels_like, humidity },
      wind: { speed: windSpeed },
      weather: [{ icon, description }],
    } = data;

    // Muestra en el HTML
    document.getElementById( "temperature" ).value = `${temp}°C`;
    document.getElementById( "feelsLike" ).value = `${feels_like}°C`;
    document.getElementById( "humidity" ).value = `${humidity}%`;
    document.getElementById( "windSpeed" ).value = `${windSpeed} m/s`;
    document.getElementById( "description" ).value = `${description}`;
    // Icon
    const weatherIconElement = document.getElementById("weatherIcon");
    weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
  } catch (err) {
    console.error(err);
  }
}
