 let cityViews = $("#city-view");
 let detailsDiv = $("#details");

 $("#add-city").on("click", function (event) {
   event.preventDefault()
   console.log("click");
 
   let cityName = $("#search-input").val();
 
   const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
   //this is the API for the 5 day forcast - const quertURL1 = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid=appid=ff72d96a24410b758f22678b53189672`
   
   //Issue - Getting a mix content error - resource https://stackoverflow.com/questions/18251128/why-am-i-suddenly-getting-a-blocked-loading-mixed-active-content-issue-in-fire
   
   //This needs a ()
   
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
      
       //shows from the HTML that the details div is empty used the Sample from Bujumbura
      
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      //$(".weatherA").text("Weather:" + response.weather.main);//this is an Array - if time come back and build.
     
      // Convert the temp to fahrenheit
      let tempF = (response.main.temp - 273.15) * 1.80 + 32;
      let feelsLkF = (response.main.feels_like - 273.15) * 1.80 +32;

      // add temp content to html
     $(".temp").text("Temperature (K) " + response.main.temp);
     $(".feelsLk").text("Feel Like:  " + response.main.feels_like);
     $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
     $(".feelsLkF").text("Feels Like (F) " + feelsLkF.toFixed(2));
      

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);
      console.log("Feel Like:" + response.main.feels_like);
    });
          //Option 2 to append the HTML from the 
          //$("#details").empty()
          // Transfer content to HTML
      
          /*let detailsDiv = $("#details")
          let cityNmRsp = $("<h2>").text(response.name)
          let windSpeed = $("<h2>").text(response.wind.windSpeed);
          let humidityRsp = $("<h2").text(response.main.humidity)

          let tempF = (response.main.temp - 273.15) * 1.80 + 32;
          let feelsLkF = (response.main.feels_like - 273.15) * 1.80 +32;

          let tempRsp = $("<p>").text("Temperature (K) " + response.main.temp);
          let feelsLkRsp = $("<p>").text("Feel Like:  " + response.main.feels_like);
          let tempFRsp = $("<p>").text("Temperature (F) " + tempF.toFixed(2));
          let feelsLkFRsp = $("<p>").text("Feels Like (F) " + feelsLkF.toFixed(2));

          detailsDiv.append(cityNmRsp, windSpeed, humidityRsp, tempRsp, feelsLkRsp, tempFRsp ,feelsLkFRsp)*/
  
    // this created the city name into local storage and added to the CityViews Array - completed during the tutoring session
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
    });
  
     renderButtons()
 
   //need to append the search to a button - see weather button name and use the class activities as ref point for code
   
   function renderButtons() {
     let cityGetItem = JSON.parse(localStorage.getItem("cityNames"))
     cityViews.empty();
     if (cityGetItem != null){
     for (var i = 0; i < cityGetItem.length; i++) {
       let cityNameBtn = $("<button>");
       cityNameBtn.text(cityGetItem[i]);
       cityNameBtn.on("click",function(){
        //console.log(reponse.name, "click")
       })
       cityViews.append(cityNameBtn)
 
       }
     }
    }
   renderButtons()

  document.getElementById('#button').addEventListener(click, loadData);
  function loadData() {
     console.log('button data clicked');

   }



   // let cityBtnTxt = JSON.parse(localStorage.getItem("response"))//line 14
    //detailsDiv.empty();
    //if (cityBtnTxt != null){
    //for (var i = 0; i < cityBtnTxt.length; i++) {
     // let cityDetailsTxt = $("<details>");
      //cityDetailsTxt.text(cityBtnTxt[i]);
      //cityDetailsTxt.on("click",function(){
        //console.log(reponse.name, "click")
    
    //}
  }
    //detailsDiv.append(cityBtnTxt)
   // PCode - have the cityNameBtn need to show the 
   // This function handles events where a city button is clicked
   //let detailsDiv = $("#details") 
   //$("<button>").on("click", function(){
    //event.preventDefault();
     //let NameInput = $("#cityName").val();

    //$("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      //let  = $(this).attr("cityName");
    //cityNameBtn.append(detailsDiv)
     
     //renderButtons();
 );
 
  // $(document).on("click", ".text", event);
 
   renderButtons()

   //$.ajax({
   // url: `http://pro.openweathermap.org/data/2.5/forecast/hourly?q={cityName}&appid=c53febb61c173b6f82dd7ef005033d4b`
   // method: "GET"
   //}).then(function (response) {
    //console.log ()
    //console.log ()
