//AJAX I Need the JSON to pull Weather which come from the index
//const cityName = $("#search-term").val() //text
//const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
//let citySearch = $("#search-term").val()

//const cityName = $("#search-input").val() //text
let cityNames = [""]; //look at the movie 

$("#add-city").on("click", function(event) {
  event.preventDefault(); 
  console.log("click");

  const cityName = $("#search-input").val();
  
  //cityNames.push(cityName);

  //renderButtons();

  //$(document).on("click", ".text", renderButtons);

  

  // Calling renderButtons which handles the processing of our movie array
  //renderButtons();
  

//cityName.push(cityName);
//renderButtons();

//const cityName = "boston"
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`

  function updatePage (response){
  console.log(response);
    }
  $.ajax({
    url: queryURL,
    method: "GET"
   

  }).then(function(response) {
      $("#cityNameView").text(response.name);//removed the .name
      console.log(queryURL);
      console.log(response)
      



      letcityDiv = $("<div class = 'cityInfo'>");
      
      letCtyinfo1 = response.name;
      letP1EL= $("<p>").text("Temp: + .main.temp");
      letP1EL.append(letcityDiv);

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

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttonsViews").empty();

  // Looping through the array of cities
  for (let i = 0; i < cityName.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("text");
    // Adding a data-attribute
    a.attr("dataText", cityNames[i]);
    // Providing the initial button text
    a.text(cityNames[i]);
    // Adding the button to the buttons-view div
    $("#buttonsViews").prepend(a);
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