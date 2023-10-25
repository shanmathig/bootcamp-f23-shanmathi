const apiKey = "1a6c074bf8e5546c001e9c78b8ed1235";
const city = "Atlanta";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("weather-info");

  // Fetch weather data from the API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process and display weather information
      const { name, main, weather } = data;
      const temperature = main.temp;
      const description = weather[0].description;

      const weatherHtml = `
              <p>City: ${name}</p>
              <p>Temperature: ${temperature} deg C</p>
              <p>Weather: ${description}</p>
          `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch((error) => {
      console.error("There was a problem fetching the weather data:", error);
      weatherInfo.innerHTML = "Failed to fetch weather data.";
    });
});
let count = 0;
document.addEventListener("click",(event) => {
    const button = document.getElementById("button");

    if (event.target === button){
        count++;
        const textElement = document.getElementById("button-info");
        textElement.textContent = count;

    }
});

