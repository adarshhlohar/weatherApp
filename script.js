const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '46add6928cmsh9b48884cf92b598p1f8ea3jsn381924218e4e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getweather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            temp3.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.e)
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})

{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response);
            temp3.innerHTML = response.temp;
            humidity3.innerHTML = response.humidity;
            wind_speed3.innerHTML = response.wind_speed

        })
        .catch(err => console.e)
}


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Wagholi', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response);
            temp4.innerHTML = response.temp;
            humidity4.innerHTML = response.humidity;
            wind_speed4.innerHTML = response.wind_speed;

        })
        .catch(err => console.e)



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response);
        temp5.innerHTML = response.temp;
        humidity5.innerHTML = response.humidity;
        wind_speed5.innerHTML = response.wind_speed

    })
    .catch(err => console.e)


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Latur', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response);
        temp6.innerHTML = response.temp;
        humidity6.innerHTML = response.humidity;
        wind_speed6.innerHTML = response.wind_speed

    })
    .catch(err => console.e)


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response);
        temp7.innerHTML = response.temp;
        humidity7.innerHTML = response.humidity;
        wind_speed7.innerHTML = response.wind_speed

    })
    .catch(err => console.e)



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response);
        temp8.innerHTML = response.temp;
        humidity8.innerHTML = response.humidity;
        wind_speed8.innerHTML = response.wind_speed

    })
    .catch(err => console.e)


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response);
        temp9.innerHTML = response.temp;
        humidity9.innerHTML = response.humidity;
        wind_speed9.innerHTML = response.wind_speed

    })
    .catch(err => console.e)

getweather("Pune");