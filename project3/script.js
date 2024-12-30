document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-btn');
    const cityname = document.getElementById('city-name');
    const statsContainer = document.querySelector(".stats-container");
    const cityTemperature = document.querySelector('#temp');
    const cityWeather = document.querySelector('#weat');
    const cityWind = document.querySelector('#s-and-d');
    const cityHumidity = document.querySelector('#humi');
    const cityAtm = document.querySelector('#ap');

    function validateCityname(cityname) {
        searchButton.textContent = "Searching...";
        searchButton.disabled = true;
        statsContainer.classList.add("none");

        if (cityname.trim() === "") {
            alert("City name should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z\s]{1,50}$/; 
        const isMatching = regex.test(cityname);
        if (!isMatching) {
            alert("Invalid City name");
            return false;
        }
        return isMatching;
    }

    async function fetchCityDetails(cityname) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=58db69c00e2aecd5cc3201553ce589d3&units=metric`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            console.log("Data: ", data);

            // Populate UI
            cityTemperature.textContent = `Temperature: ${data.main.temp} °C`;
            cityWeather.textContent = `Weather: ${data.weather[0].description}`;
            cityWind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            cityHumidity.textContent = `Humidity: ${data.main.humidity}%`;
            cityAtm.textContent = `Atmospheric Pressure: ${data.main.pressure} hPa`;

            statsContainer.classList.remove("none");
        } catch (error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', function () {
        const citynameInput = cityname.value;
        console.log("Logging City Name: ", citynameInput);
        if (validateCityname(citynameInput)) {
            fetchCityDetails(citynameInput);
        }
    });

    
    function setWeatherBackground(weather) {
        // Remove all weather classes from body
        document.body.className = ''; 
        
        // Apply the new weather class
        document.body.classList.add(weather.toLowerCase());
    }

    
    function fetchWeather() {
        // Replace this with your actual weather API call
        let weatherConditions = ['sunny', 'cloudy', 'rainy', 'snowy','mist','clear sky'];
        const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

        // Set the dynamic background based on weather
        setWeatherBackground(randomWeather);

        // Log current weather condition for debugging
        console.log('Weather:', randomWeather);
    }

    
    window.onload = fetchWeather;


});