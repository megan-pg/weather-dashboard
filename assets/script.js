var todayDate = moment().format('');
var searchArray = [];

function appendArchive() {
    $(".archivedRow").empty();

    for (var entry in searchArray) {
        $(".archivedRow").append(`<button type="button" value=${searchArray[entry]} class="btn btn-outline-secondary archBtn">${searchArray[entry]}</button>`);
    }
}

function searchCities(cityName) {
    var apiKey = "8c42537d5174398ca75f180d9d409dc2";
    //var cityName = $("#cityInput").val();

    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}


    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",US&units=imperial&APPID=8c42537d5174398ca75f180d9d409dc2",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var imageCode = response.weather[0].icon;
        var imageURL = "https://openweathermap.org/img/w/" + imageCode + ".png";

        $('#weatherImage').attr('src', imageURL);

        $("#temperature").text("Temperature: " + response.main.temp);
        //console.log(response.main.temp);
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#windSpeed").text("Windspeed: " + response.wind.speed);
        $(".card-header").text(cityName)

        var latitude = response.coord.latitude;

        var longe = response.coord.longe;

        var cityName = response.id;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=8c42537d5174398ca75f180d9d409dc2=" + latitude + "&" + "lon=" + longe,
            method: "GET"
        }).then(function (response) {
            // console.log(response);

            var uvIndex = response.value;

            $("#uv").append(`UV Index: <span class="uvSpan"> ${uvIndex} </span>`);

            if (uvIndex < 3) {
                $(".uvSpan").addClass("good");
            } else if (uvIndex > 2 && uvIndex < 8) {
                $(".uvSpan").addClass("so-so");
            } else {
                $(".uvSpan").addClass("bad");
            }


        })
    })


    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=8c42537d5174398ca75f180d9d409dc2",
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var date1Image = response.list[5].weather[0].icon;
        var date1ImageURL = "https://openweathermap.org/img/w/" + date1Image + ".png";

        var date2Image = response.list[13].weather[0].icon;
        var date2ImageURL = "https://openweathermap.org/img/w/" + date2Image + ".png";

        var date3Image = response.list[21].weather[0].icon;
        var date3ImageURL = "https://openweathermap.org/img/w/" + date3Image + ".png";

        var date4Image = response.list[29].weather[0].icon;
        var date4ImageURL = "https://openweathermap.org/img/w/" + date4Image + ".png";

        var date5Image = response.list[37].weather[0].icon;
        var date5ImageURL = "https://openweathermap.org/img/w/" + date5Image + ".png";

        $("#date1").html(response.list[5].dt_txt.slice(5, 10));
        $("#date1Iamge").html(response.list[5].weather.icon);
        $("#date1Iamge").attr('src', date1ImageURL);
        $("#date1Temp").html("Temp: " + Math.floor(response.list[5].main.temp) + " °F");
        $("#date1Humid").html("Humidity: " + response.list[5].main.humidity + "%");

        $("#date2").html(response.list[13].dt_txt.slice(5, 10));
        $("#date2Iamge").html(response.list[13].weather.icon);
        $("#date2Iamge").attr('src', date2ImageURL);
        $("#date2Temp").html("Temp: " + Math.floor(response.list[13].main.temp) + " °F");
        $("#date2Humid").html("Humidity: " + response.list[13].main.humidity + "%");

        $("#date3").html(response.list[21].dt_txt.slice(5, 10));
        $("#date3Iamge").html(response.list[21].weather.icon);
        $("#date3Iamge").attr('src', date3ImageURL);
        $("#date3Temp").html("Temp: " + Math.floor(response.list[21].main.temp) + " °F");
        $("#date3Humid").html("Humidity: " + response.list[21].main.humidity + "%");

        $("#date4").html(response.list[29].dt_txt.slice(5, 10));
        $("#date4Iamge").html(response.list[29].weather.icon);
        $("#date4Iamge").attr('src', date4ImageURL);
        $("#date4Temp").html("Temp: " + Math.floor(response.list[29].main.temp) + " °F");
        $("#date4Humid").html("Humidity: " + response.list[29].main.humidity + "%");

        $("#date5").html(response.list[37].dt_txt.slice(5, 10));
        $("#date5Iamge").html(response.list[37].weather.icon);
        $("#date5Iamge").attr('src', date5ImageURL);
        $("#date5Temp").html("Temp: " + Math.floor(response.list[37].main.temp) + " °F");
        $("#date5Humid").html("Humidity: " + response.list[37].main.humidity + "%");
    })
}

console.log(searchCities("New York City"));


$(document).on("click", ".archBtn", function () {
    clearData();

    var input = $(this).val();

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + input + ",US&units=imperial&APPID=8c42537d5174398ca75f180d9d409dc2",
        method: "GET"
    }).then(function (response) {
        var imageCode = response.weather[0].icon;
        var imageURL = "https://openweathermap.org/img/w/" + imageCode + ".png";

        $('#weatherImage').attr('src', imageURL);

        $("#enteredCity").html(response.name + " (" + currentDate + ")");

    })
})
