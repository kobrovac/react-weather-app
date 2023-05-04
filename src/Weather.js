import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            ready: true,
            date: "Thursday, 15:25",
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        })
       
        
    }

    if (weatherData.ready) {
         return (
        <div className="Weather">
            <form>
                <div className="row"> 
                <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        
                        <img src={weatherData.iconUrl}
                                alt={weatherData.description}
                                className="float-left"
                        />
                                
                   
                        <span className="float-left temperature">{weatherData.temperature}</span>
                        <span className="unit">°C</span>
                     </div>
                     
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
           </div>
    )
    }

    else {
        const apiKey ="5aadb231294f844bcda7e81c8o0bct7f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
  
}