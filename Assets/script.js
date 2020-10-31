//AJAX I Need the JSON to pull Weather which come from the index
//const cityName = $("#search-term").val() //text
//const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`
//let citySearch = $("#search-term").val()

//const cityName = $("#search-input").val() //text

//$("add-city").on("click", function() {
//const cityName = $(this).attr("text");
const cityName = "boston"
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`

  function updatePage(response){
  console.log(response);
    }
  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function(response) {
      $("#cityNameView").text(JSON.stringify(response));
      console.log(queryURL);
      console.log(response);
  })
//});
//let results = response.data
//need for loop to return the data
for (let i = 0; i < results.length; i++){

}
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
/*https://www.w3schools.com/js/js_json_intro.asp - sample - the 
myObj = {
  "name":"boston", 
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }*/

// need a clear function

//local stoarge for the button for name to recall the seach and display data

//need to append the search to a button - see movie activity

/*localStorage.setItem("json");//need to pull from the results json //https://www.w3schools.com/js/js_json_intro.asp

$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));
$("#--.description").val(localStorage.getItem("cityName"));*/

