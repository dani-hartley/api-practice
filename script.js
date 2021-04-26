fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuaS1oYXJ0bGV5IiwiYSI6ImNrbnh1bTdlbzBiMzAybnJ6aXBpYWs5aTEifQ.CMLUKgrf01ko0k4AqG3cmg')
.then(function(response){
    return response.json();
})
.then(function(data) {
    console.log(data);
});

