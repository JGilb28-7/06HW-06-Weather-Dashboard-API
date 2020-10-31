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
  console.log(cityName)
    }
  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function(response) {
      $("#cityNameView").text(JSON.stringify(response));
  })
//});