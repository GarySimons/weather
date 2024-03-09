import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Ccurrent&key=RQP376XZWGUXQKGSRFEZHNDKE&contentType=json`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="App">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="enter location"
        type="text"
      />

      <h2>Main data</h2>
      <p>Location: {data.address}</p>
      <p>Today's date: {data.days[0].datetime} </p>
      <p>Description: {data.currentConditions.conditions}</p>

      <h3>Day overview</h3>
      <p>Humidity: {data.currentConditions.humidity}</p>
      <p>Cloud cover: {data.currentConditions.cloudcover}</p>
      <p>Max temp: {data.days[0].tempmax}</p>
      <p>Min temp: {data.days[0].tempmin}</p>
      <p>Sunrise: {data.currentConditions.sunrise}</p>
      <p>Sunset: {data.currentConditions.sunset}</p>

      <h3>5 Day Forcast</h3>

      <p>Day 1: [src]='{data.days[0].icon}'</p>
      <p>Day 2: </p>
      <p>Day 3: </p>
      <p>Day 4: </p>
      <p>Day 5: </p>
    </div>
  );
}

export default App;
