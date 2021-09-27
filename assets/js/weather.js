var weatherDisplay = document.querySelector("#weather-display");

function weatherFunction () {
    var searchTerm = document.querySelector("#searchTerm").value; 
    event.preventDefault();
    console.log(searchTerm); 
  
    // Make a `fetch` request concatenating that search term to the query URL for current weather
    fetch (
      'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
    ) 
    .then(function(response) {
      console.log(response);
      return response.json();
    })  
    .then(function(response) {
      console.log(response.data);

  
      // Fetch Request
      fetch (
        'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
      )  
      .then(function(response) {
        console.log(response);
        return response.json();
      })  

      .then(function(response) {
        console.log(response.data);

      })
    })  
  }