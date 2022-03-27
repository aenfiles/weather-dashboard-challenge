let pastSearchEl = document.querySelector("#past-searches")








fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=bcbc10570516f3605acc117ec4843bb6').then( function(data){
    //console.log(data)
    return data.json();
 }).then(function(completeData){
     console.log(completeData);
 })

let APIKey = "bcbc10570516f3605acc117ec4843bb6";