var todayDate = moment().format('');

function searchCities(cityName) {
    var apiKey = "8c42537d5174398ca75f180d9d409dc2";

    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}


    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",US&units=imperial&APPID=8c42537d5174398ca75f180d9d409dc2",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var iconCode = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
        $("#temperature").text("Temperature: " + response.main.temp);
        //console.log(response.main.temp);
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#windSpeed").text("Windspeed: " + response.wind.speed);
        $(".card-header").text(cityName)
    })

    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=8c42537d5174398ca75f180d9d409dc2",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var iconCode = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
    })
}

console.log(searchCities("New York City"));