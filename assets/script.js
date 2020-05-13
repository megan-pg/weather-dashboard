var todayDate = moment().format('');

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",US&units=imperial&APPID=abcd9257d5733a460d1691720d4f7b99",
    method: "GET"
}).then(function (response) {
    // console.log(response);
    var iconCode = response.weather[0].icon;
    var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
})
