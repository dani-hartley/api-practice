fetch('http://open.mapquestapi.com/geocoding/v1/address')
.then(function(response){
    return response.json();
})
.then(function(data) {
    console.log(data);
});

