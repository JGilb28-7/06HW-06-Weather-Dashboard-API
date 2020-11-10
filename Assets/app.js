//Session with Paul - full re-org of prior code - 11/7
let cityViews = $("#city-view");
let detailsDiv = $("#details");
let searchInput = $("#search-input");
const cityTitle = $("#city");
const windSpeedCont = $("#wind");
const humidityCont = $("#humidity");
const tempCont = $("#temp");
const feelsLkCont = $("#feelsLk");
const tempfCont = $("#tempF");
const feelsLkFCont = $("#feelsLkF");
const timeCont = $("#time");
const uvIndxCont = $("#uvIndex")
const submitBtn = $("#add-city");
let cities = ["Boston" , "Lynn"];
let forecastDiv = $("fiveDayForecast");


//to do - get local storage

function convertToFerinheight(temp) {
  let tempF = (temp - 273.15) * 1.8 + 32;
  return tempF;
}

function convertdateTime(){

}
function getCurrentWeatherAndDisplay(cityName) {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    //shows from the HTML that the details div is empty used the Sample from Bujumbura

    cityTitle.html("<h2>" + response.name + "- Current Weather");
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    timeCont.text("Time: " + new Date(response.dt * 1000));
    windSpeedCont.text("Wind Speed: " + response.wind.speed);
    humidityCont.text("Humidity: " + response.main.humidity);
   
    // Convert the temp to fahrenheit
    let tempF = convertToFerinheight(response.main.temp);
    let feelsLkF = convertToFerinheight(response.main.feels_like);

    // add temp content to html
    tempCont.text("Temperature (K) " + response.main.temp);
    feelsLkCont.text("Feel Like:  " + response.main.feels_like);
    tempfCont.text("Temperature (F) " + tempF.toFixed(0));
    feelsLkFCont.text("Feels Like (F) " + feelsLkF.toFixed(0));
    uvIndxCont.text("UV Index: " + response.coord.lat);
    //uvIndxCont.text("UV Index: " + response.weather);//need to link the Array and icon//

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);
    console.log("Feel Like:" + response.main.feels_like);
    //console.log("date:" + response.dt);
  });
}

function getFiveDayForcastAndDisplay(cityName) {
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`;
 //used the following resource for the 5 day forcast after the console.log(response)
 //used the cnt = 5 to limit the daily response - this is in the API Doc for Weather &cnt=5 removed need loop
 //https://stackoverflow.com/questions/49640174/building-a-5-day-forecast-using-open-weather-api-ajax-and-js
  $.ajax({
      url: queryURL,
      method: "GET",
      
    }).then(function (response) {
    // Log the queryURL
      console.log(queryURL);

    // Log the resulting object  
      console.log(response);
     
      //Stackoverflow resource: had to update with my code
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const timesToDisplay = [8, 16, 24, 31, 39];
      let d;
      let dayName;
      let weatherFive = '';
     
      // need to create a loop over the time not use the cnt that will limit what is displayed from the array of title:
      weatherFive += "<h2>" + response.city.name + " Five Day Forecast </h2>"; // City (displays once)
      //weatherFive += "<b> Date: " + response.list.dt_txt + "</b>";//Date - need to adjust 
    
      // changed to respsone, updated the varibale weatherFive, add the date dt_txt but coming back undefined
      $.each(response.list, function(index, val) {
      //see notes in .md for resources listed:
       // for(i=0+8; i < response.list.length; i++){
        if(timesToDisplay.includes(index)){
        d = new Date(response.list[index].dt * 1000); //jsg - convert to miliseconds
        dayName = days[d.getDay()];

        weatherFive += "<p> " // Opening paragraph tag
        weatherFive += "<b> " + index + "</b>: " // Day
        //added the convert to Ferinheight to line and the .toFixed() only working on Day 0.
        weatherFive += "<b>" + timesToDisplay.indexOf(index) + " (" + dayName + ")</b>: " // DateTime
        weatherFive += convertToFerinheight(val.main.temp).toFixed(0) + "&degF" // Temperature
        weatherFive += "<span> | Humidity: "+ val.main.humidity + "% </span>"
        weatherFive += "<span> | " + val.weather[0].description + "</span>"; // Description
        weatherFive += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
        weatherFive += "</p>" // Closing paragraph tag
        
        }
      //} goes to loop
    });
      $("#fiveDayForecast").html(weatherFive);

  });
}

function getFiveUVIndexAndDisplay(cityName) {
  //let lat = response.city.coord.lat;
  //let lon = response.city.coord.lon;
  
  const queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${"lat"}&lon=${"lon"}&appid=appid=ff72d96a24410b758f22678b53189672`;
 
 $.ajax({
      url: queryURL,
      method: "GET",
      
    }).then(function (response) {
      var uvI = response.value;
      uvIndexDiv.text("UV Index: " + uvI);
      console.log(queryURL);

    // Log the resulting object  
      console.log(response);
       
     
    })
    //} goes to loop
  }
    //$("#fiveDayForecast").html(weatherFive);

//});
//}
//submit
submitBtn.on("click", function (event) {
  event.preventDefault();

  let cityName = searchInput.val();
  cities.push(cityName);
  console.log(cityName);
  getCurrentWeatherAndDisplay(cityName);
  getFiveDayForcastAndDisplay(cityName);
  getFiveUVIndexAndDisplay(cityName);

  renderButtons();
});

function renderButtons() {
  //let cityGetItem = JSON.parse(localStorage.getItem("cityNames"))
  cityViews.empty();
  //if (cityGetItem != null){
  for (var i = 0; i < cities.length; i++) {
    let cityNameBtn = $("<button>");
    cityNameBtn.addClass("cityBtns");
    cityNameBtn.text(cities[i]);

    cityViews.append(cityNameBtn);

    //}
  }
}
renderButtons();

$(document).on("click", ".cityBtns", function(){
//$(this).text() or let cityNames = $(this).text()
console.log($(this).text())
getCurrentWeatherAndDisplay($(this).text())
getFiveDayForcastAndDisplay($(this).text())
getFiveUVIndexAndDisplay($(this).text());
});

