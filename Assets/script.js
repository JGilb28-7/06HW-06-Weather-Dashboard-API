//AJAX I Need the JSON to pull Weather which come from the index
//const cityName = $("#search-term").val() //text
//const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
//let citySearch = $("#search-term").val()

//const cityName = $("#search-input").val() //text
let cityNames = ["boston"] //look at the movie 

$("#add-city").on("click", function(event) {
  event.preventDefault(); 
  console.log("click");

  const cityName = $("#search-input").val();
  
//const cityName = "boston"
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`

  function updatePage (response){
  console.log(response);
    }
  $.ajax({
    url: queryURL,
    method: "GET"
   

  }).then(function(response) {
      $("#city-view").text(response.name);//removed the .name
      console.log(queryURL);
      console.log(response)
      
      //Ref code from the Bujumbara Data Activity
       //$(".city").html("<h1>" + response.name + " Weather Details</h1>");
       //$(".wind").text("Wind Speed: " + response.wind.speed);
       //$(".humidity").text("Humidity: " + response.main.humidity);
       
   
       var tempF = (response.main.temp - 273.15) * 1.80 + 32;

       //$(".temp").text("Temperature (K) " + response.main.temp);
      // $(".tempF").text("Temperature (F) " + tempF.toFixed(2));


//commenting out my code attempt
      //letcityDiv = $("<div class = 'cityInfo'>");
      
      //letCtyinfo1 = response.name;
      //letP1EL= $("<p>").text("Temp: + .main.temp");
      //letP1EL.append(letcityDiv);

  })
      
      //let cityDiv = $("<div id = 'btnViews'>");
     // let results = response.data
      //let City = response.name
      //let humidity = response.main.humidity
      //let temp = response.main.temp
      //let feels_like = response.main.feels_like
      //let pressure = response.main.pressure

//need for loop to return the data
//for (let i = 0; i < results.length; i++){
  
  //$("#cityNameView").prepend("buttonViews")
  
  //let cityDiv = $("#buttonViews");
//}
//need to get into the main and pull the following  
//main:
  //feels_like: 264.9
  //humidity: 74
  //pressure: 1032
  //temp: 270.54
  //temp_max: 273.15
  //temp_min: 269.15
  //__proto__: Object
//name: "Boston"
//https://www.w3schools.com/js/js_json_intro.asp - sample - the 

// need a clear function

//local stoarge for the button for name to recall the seach and display data

//need to append the search to a button - see movie activity

  function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < cityName.length; i++) {
      var a = $("<button>");
      a.addClass("city");
      a.attr("data-name", cityNames[i]);
      a.text(cityNames[i]);
      $("#buttons-view").append(a);
    }
  }


// This function handles events where a city button is clicked
$("#cityNameView").on("click", function(event) {
  event.preventDefault();
  //this line grabs the input from the textbox
  let NameInput = $("#cityName").val();

  // Adding movie from the textbox to our array
  //.push(cityNames);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
  });

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".text", event);

// Calling the renderButtons function to display the initial buttons
renderButtons();

//localStorage.setItem("json");//need to pull from the results json //https://www.w3schools.com/js/js_json_intro.asp

//$("#--.description").val(localStorage.getItem("cityName"));


});