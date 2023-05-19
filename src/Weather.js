import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            date: new Date(response.data.time * 1000),
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon,
        });
    }

     function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey ="5aadb231294f844bcda7e81c8o0bct7f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
         return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row"> 
                <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
           
           </div>
    );
    }

    else {
        search();
        return "Loading...";
    }
  
}