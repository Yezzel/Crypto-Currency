var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coincap.io/v2/assets",
  "method":"GET",
  "headers" :{}
}
$.ajax(settings).done(function(response) {
   
   
  
  btc.innerHTML = Math.round(response.data[0].priceUsd)
  eth.innerHTML = Math.round(response.data[1].priceUsd)
  doge.innerHTML = Math.round(response.data[7].priceUsd)
})


