//AJAX I Need the JSON to pull Weather which come from the index
const cityName = "$city-input" //text
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff72d96a24410b758f22678b53189672`

function updatePage(response){
    console.log (response)

}

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage) //promise


