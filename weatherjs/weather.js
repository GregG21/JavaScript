class Weather {
    constructor(city, language) {
        this.apiKey = '74e93e1c885bd63182a68fcb46c1b4d8';
        this.city = city;
        this.language = language;
    }

    async getWeather() {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=${this.language}&units=metric&appid=${this.apiKey}`
        )
        const weeklyResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,current,alerts,minutely&appid=${this.apiKey}`)
        // const weeklyResponseData = await weeklyResponse.json();
        // console.log(`WEEKLY: ${weeklyResponseData}`)
        const responseData = await response.json();
        return responseData;
    }
    // change location here 
    changeLocation(city) {
        this.city = city;
    }
    
}