const apiKey = "https://openweathermap.org/"; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        // Update UI
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} km/h`;

    } catch (error) {
        console.log("Error:", error);
        alert("Something went wrong");
    }
}
