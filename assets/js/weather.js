function weatherFunction() {
    var searchTerm = document.querySelector("#searchTerm").value;
    event.preventDefault();
    console.log(searchTerm);

    //Fetch request
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
    )
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (response) {
            console.log(response.data);

            var currentDate = moment().format("M/D/YYYY").toString();
            $("#city-name").html(response.name + " " + currentDate);
            $("#temp").html("Temp: " + response.main.temp + " °F");
            $("#speed").html("Wind: " + response.wind.speed + " mph");
            $("#humidity").html("Humidity: " + response.main.humidity + "%");
            console.log(response.weather[0].icon);


            fetch(
                'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
            )
                .then(function (response) {
                    console.log(response);
                    return response.json();
                })
                .then(function (response) {
                    console.log(response.data);

                })
        })
}