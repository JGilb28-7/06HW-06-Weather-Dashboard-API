//code attempts prior to tutor session and saturday pre-class session
    //const cityName = $("#search-term").val() //text
    //const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
    //let citySearch = $("#search-term").val()
    //const cityName = $("#search-input").val() //text

//created an Array to hold the city names but not updating - I believe that i can not have an empty array??    
let cityNames = [] //look at the movie 

$("#add-city").on("click", function (event) {
  event.preventDefault();
  console.log("click");

  let cityName = $("#search-input").val();

  //const cityName = "boston"
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
  //Getting a mix content error - resource https://stackoverflow.com/questions/18251128/why-am-i-suddenly-getting-a-blocked-loading-mixed-active-content-issue-in-fire
  // changed from http: to https: still not working
  
  function updatePage(response) {
    console.log(response);
  }
  $.ajax({
    url: queryURL,
    method: "GET"


  }).then(function (response) {
    $("#city-view1").text(response.name);//removed the .name
    console.log(queryURL);
    console.log(response)

    //Ref code from the Bujumbara Data Activity - need to make this update the HTML from onclick
    //the will need to start and be coded and need to be completed for each item when the new city button is clicked

    //I beleive I need to creat a new ajax response for this:
    //let resultsDiv = $("<div class = 'city'>");
    //let city = response.main.city;
    //let ptag1 = $("<p>").text("City Name:" + city);
    //resultsDiv.append(ptag1);

    //kept the $ in code to show it is returning data on the intial city search until I have the onclick event fixed..
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);


    let tempF = (response.main.temp - 273.15) * 1.80 + 32;

    //$(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

//will need to add an additional ajax statement for the 5 day forcast!
//need to look at API for the 5day data 
//function updatePage(response) {
  //console.log(response);
//}
//$.ajax({
  //url: queryURL,
  //method: "GET"

    //commenting out my prior code attempt
    //letcityDiv = $("<div class = 'cityInfo'>");
    //letCtyinfo1 = response.name;
    //letP1EL= $("<p>").text("Temp: + .main.temp");
    //letP1EL.append(letcityDiv);

  })
  //create the below to show I can identify the path from the console.log
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
  // need to change from kelvin to f

  //resource - https://www.w3schools.com/js/js_json_intro.asp - 

  // need a clear function so the names to not remain in the search field

  //local stoarge for the button for name to recall the seach and display data


  //need to append the search to a button - see movie activity and use the class activities as ref point for code
  function renderButtons() {
    $("#city-view1").empty();

    for (var i = 0; i < cityName.length; i++) {
      event.preventDefault();
      var a = $("<button>");
      a.addClass("city");
      a.attr("data-name", cityName)//not sure this is talking to array
      a.text(cityNames[""]);
      $("#city-view1").push(a);
    }
  }

  // This function handles events where a city button is clicked
  $("#city-view1").on("click", function (event) {
    event.preventDefault();
    //this line grabs the input from the textbox
    let NameInput = $("#cityName").val();

    // Adding city names from the textbox to our array
    //.push(cityNames); //not working and showing error on console.log when not commented out!

    renderButtons();
  });

  $(document).on("click", ".text", event);

  renderButtons();
  // if this is rendering the butting why am i seeing multismall buttons and not appeending the array?

  //localStorage.setItem("json");//need to pull from the results json //https://www.w3schools.com/js/js_json_intro.asp

  //$("#--.description").val(localStorage.getItem("cityName"));??


});