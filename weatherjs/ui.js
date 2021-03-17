
class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name.toUpperCase();
        this.description.textContent = weather.weather[0]['description'].toUpperCase();
        this.string.textContent =  `${weather.main.temp}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0]['icon']}.png`);
        this.humidity.textContent = `Humiditiy: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent =  `Wind Speed: ${weather.wind.speed} KM/H`;
    }
}