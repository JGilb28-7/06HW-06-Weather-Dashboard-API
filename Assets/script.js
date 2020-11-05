//need to clear the local storage on the entering the site  
//localStorage.clear(); //all items

let cityViews = $("#city-view");
$("#add-city").on("click", function (event) {
  event.preventDefault()
  console.log("click");

  let cityName = $("#search-input").val();

  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
  //this is the API for the 5 day forcast - const quertURL1 = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid=appid=ff72d96a24410b758f22678b53189672`
  
  //Issue - Getting a mix content error - resource https://stackoverflow.com/questions/18251128/why-am-i-suddenly-getting-a-blocked-loading-mixed-active-content-issue-in-fire
  // changed from http: to https: still not working

  $.ajax({
    url: queryURL,
    method: "GET"
  
  }).then(function (response) {
    let cityNames = JSON.parse(localStorage.getItem("cityNames"))
    let updatedCity = [];
    console.log(cityNames);
    updatedCity.push(cityName);

    if (cityNames == null) {
      localStorage.setItem("cityNames", JSON.stringify(updatedCity));
    } else {
      let citiesArray = JSON.parse(localStorage.getItem("cityNames"));
      citiesArray.push(cityName);
      localStorage.setItem("cityNames", JSON.stringify(citiesArray));

  }
    console.log(queryURL);
    console.log(response)
    
    renderButtons()
     //will need to add an additional ajax statement for the 5 day forcast!
    //need to look at API for the 5day data 
  
  })

    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response) {
      //$("#details").text(JSON.stringify(response));
      //$("#details").text(response)
      

      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);

      let tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

      //let cityDetails = $("<div id = 'details'>");
      //let results = response.data
      //let City = response.name
      //let humidity = response.main.humidity
      //let temp = response.main.temp
      //let feelslike = response.main.feels_like
      //let pressure = response.main.pressure

      // console.log(response);

      /* Constructing HTML containing the artist information
      var artistName = $("<h1>").text(response.name);
      var artistURL = $("<a>").attr("href", response.url).append(artistName);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
      var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
      var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");*/

      // Empty the contents of the artist-div, append the new artist content
     // $("#artist-div").empty();
    //$("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
        //});

      let resultsDiv = $("<div class = 'details1'>");
      let city = response.main.city;
      let ptag1 = $("<p>").text(":" + city);
      resultsDiv.append(ptag1);

      })
    
  

  //create the below to show I can identify the path from the console.log
  

  //need for loop to return the data
  //for (let i = 0; i < results.length; i++){

  //$("#cityNameView").prepend("buttonViews")

  //let cityDiv = $("#buttonViews");
  //}


  //resource - https://www.w3schools.com/js/js_json_intro.asp - 

  // need a clear function so the names to not remain in the search field

  //local stoarge for the button for name to recall the seach and display data


  //need to append the search to a button - see weather button name and use the class activities as ref point for code
  function renderButtons() {
    let cityGetItem = JSON.parse(localStorage.getItem("cityNames"))
    cityViews.empty();
    if (cityGetItem != null){
    for (var i = 0; i < cityGetItem.length; i++) {
      let cityNameBtn = $("<button>");
      cityNameBtn.text(cityGetItem[i]);
      cityNameBtn.on("click",function(){
        console.log(reponse.name, "clicked")
      })
      cityViews.append(cityNameBtn)

      }
    }
  }
  renderButtons()
  

  $("#<button>").on("click", function (event) {
    event.preventDefault();

    

    renderButtons();
  });

  $(document).on("click", ".text", event);

  renderButtons();
 
  // if this is rendering the butting why am i seeing multismall buttons and not appeending the array?

  //localStorage.setItem("json");//need to pull from the results json //https://www.w3schools.com/js/js_json_intro.asp

  //$("#--.description").val);??

});

   // This function handles events where one button is clicked
   //$("cityNameBtn").on("click", function(event) {
    //event.preventDefault();

    // This line grabs the input from the textbox
    //let cityResults = $("cityName").val().trim();

    //Adding the movie from the textbox to our array
    //movies.push(movie);
    //console.log(movies);

    // Calling renderButtons which handles the processing of our movie array
    //renderButtons();
  //});

  // Function for displaying the movie info
  // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
 //$(document).on("click", "", displayMovieInfo);