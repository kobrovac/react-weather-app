import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Pula" />
      <footer>
        This project is coded by Karin Obrovac and is <a href="https://github.com/kobrovac/react-weather-app" target="_blank" rel="noopener noreferrer" >
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}


