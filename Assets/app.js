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
const uvIndxCont = $("#uvIndex")
const submitBtn = $("#add-city");
let cities = ["Boston" , "Lynn"];
let forcastDiv = $("fiveDayForcast");
//to do - get local storage

function convertToFerinheight(temp) {
  let tempF = (temp - 273.15) * 1.8 + 32;
  return tempF;
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

    cityTitle.html("<h1>" + response.name + " Weather Details</h1>");
    windSpeedCont.text("Wind Speed: " + response.wind.speed);
    humidityCont.text("Humidity: " + response.main.humidity);
   
    // Convert the temp to fahrenheit
    let tempF = convertToFerinheight(response.main.temp);
    let feelsLkF = convertToFerinheight(response.main.feels_like);

    // add temp content to html
    tempCont.text("Temperature (K) " + response.main.temp);
    feelsLkCont.text("Feel Like:  " + response.main.feels_like);
    tempfCont.text("Temperature (F) " + tempF.toFixed(2));
    feelsLkFCont.text("Feels Like (F) " + feelsLkF.toFixed(2));
    //uvIndxCont.text("UV Index: " + response.weather);//need to link the Array and icon//

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);
    console.log("Feel Like:" + response.main.feels_like);
  });
}

function getFiveDayForcastAndDisplay(cityName) {
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&appid=ff72d96a24410b758f22678b53189672`;
 //used the following resource for the 5 day forcast after the console.log(response)
 //used the cnt = 5 to limit the daily response - this is in the API Doc for Weather
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
      let weatherFive = '';
      weatherFive += "<h2>" + response.city.name + " Five Day Forcast </h2>"; // City (displays once)
       //Need to add in the date:
        // changed to respsone, updated the varibale weatherFive, add the date dt_txt but coming back undefined
      $.each(response.list, function(index, val) {
        weatherFive += "<b>" + val.clouds.dt_txt + " Date </b>";
        weatherFive += "<p>" // Opening paragraph tag
        weatherFive += "<b>Day " + index + "</b>: " // Day
        //added the convert to Ferinheight to line and the .toFixed() only working on Day 0.
        weatherFive += convertToFerinheight(val.main.temp) + "&degF" // Temperature
        weatherFive += "<span> | " + val.weather[0].description + "</span>"; // Description
        weatherFive += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
        weatherFive += "</p>" // Closing paragraph tag
      });
      $("#fiveDayForcast").html(weatherFive);

  });
}

//submit
submitBtn.on("click", function (event) {
  event.preventDefault();

  let cityName = searchInput.val();
  cities.push(cityName);
  console.log(cityName);
  getCurrentWeatherAndDisplay(cityName);
  getFiveDayForcastAndDisplay(cityName);

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
});

//outstanding items
  //1. complete the Forcast
      //A. Limit the degrees length
      //B. Need to updte the date from undefined line 82
      //C. Fix the day 0  - should === the current day +1
      //D. update the .md
      //F. Local Storage
      //G. Format HTML/CSS for format once the functionality is complete
