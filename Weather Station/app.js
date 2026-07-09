function fetch_data(){
    var cityName = document.getElementById('city').value;
    if(cityName === ""){
        alert("Please enter a city name.");
    }
    const API_KEY = 'YOUR_API_KEY_HERE';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + API_KEY + '&units=metric';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var resp_code = data['cod'];
        if(resp_code === '404'){
            alert("City not found. Please enter a valid city name.");
        }
        else{
            console.log(data);
            var cityTemp = data['main']['temp'];
            var icon = data['weather'][0]['icon'];
            var description = data['weather'][0]['description'];
            var humidity = data['main']['humidity'];
            var windSpeed = data['wind']['speed'];
            var icon_url = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
            document.getElementById('result').innerHTML = `<img src=${icon_url} alt="Weather Icon">
                                                           <p><strong>Temperature:</strong> ${cityTemp}&deg;C</p>
                                                           <p><strong>Weather:</strong> ${description}</p>
                                                           <p><strong>Humidity:</strong> ${humidity}%</p>
                                                           <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>`;        
        }
    })
}
