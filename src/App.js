import React, { useState } from "react";
import axios from "axios";
import clearDay from "./images/clear-day.svg";

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
      <div className="main-container">
        <div className="weather-panel">
          <div className="main-panel">
            <input
              className="input-panel"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={searchLocation}
              type="text"
            />
            <div className="details-panel">
              <p className="location">{data.address}</p>
              <p className="date">
                {data.days ? [data.days[0].datetime] : null}
              </p>
              <img
                src={clearDay}
                alt="weather symbol"
                className="weather-symbol"
              />
              <p className="temp">
                15<span>&#8451;</span>
              </p>
              <p className="description">
                {data.currentConditions
                  ? [data.currentConditions.conditions]
                  : null}
              </p>
            </div>
          </div>

          <div className="overview-panel"></div>
        </div>
      </div>

      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder="enter location"
        type="text"
      />

      <h2>Main data</h2>

      <p>Location: {data.address}</p>
      <p>date:{data.days ? [data.days[0].datetime] : null}</p>
      <p>
        Description:
        {data.currentConditions ? [data.currentConditions.conditions] : null}
      </p>

      <h3>Day overview</h3>
      <p>
        Humidity:
        {data.currentConditions ? [data.currentConditions.humidity] : null}
      </p>
      <p>
        Cloud cover:
        {data.currentConditions ? [data.currentConditions.cloudcover] : null}
      </p>
      <p>Max temp: {data.days ? [data.days[0].tempmax] : null}</p>
      <p>Min temp: {data.days ? [data.days[0].tempmin] : null}</p>
      <p>
        Sunrise:
        {data.currentConditions ? [data.currentConditions.sunrise] : null}
      </p>
      <p>
        Sunset:
        {data.currentConditions ? [data.currentConditions.sunset] : null}
      </p>

      <h3>5 Day Forcast</h3>

      <h4>Day 1</h4>
      <div>
        <p>Day: Tomorrow</p>
        <p>Description: {data.days ? [data.days[1].conditions] : null}</p>
        <p>Max: {data.days ? [data.days[1].tempmax] : null}</p>
        <p>Min: {data.days ? [data.days[1].tempmin] : null}</p>
      </div>
      <h4>Day 2</h4>
      <div>
        <p>Day: {data.days ? [data.days[2].datetime] : null}</p>
        <p>Description: {data.days ? [data.days[1].conditions] : null}</p>
        <p>Max: {data.days ? [data.days[2].tempmax] : null}</p>
        <p>Min: {data.days ? [data.days[2].tempmin] : null}</p>
      </div>
      <h4>Day 3</h4>
      <div>
        <p>Day: {data.days ? [data.days[3].datetime] : null}</p>
        <p>Description: {data.days ? [data.days[1].conditions] : null}</p>
        <p>Max: {data.days ? [data.days[3].tempmax] : null}</p>
        <p>Min: {data.days ? [data.days[3].tempmin] : null}</p>
      </div>
      <h4>Day 4</h4>
      <div>
        <p>Day: {data.days ? [data.days[4].datetime] : null}</p>
        <p>Description: {data.days ? [data.days[1].conditions] : null}</p>
        <p>Max: {data.days ? [data.days[4].tempmax] : null}</p>
        <p>Min: {data.days ? [data.days[4].tempmin] : null}</p>
      </div>
      <h4>Day 5</h4>
      <div>
        <p>Day: {data.days ? [data.days[5].datetime] : null}</p>
        <p>Description: {data.days ? [data.days[1].conditions] : null}</p>
        <p>Max: {data.days ? [data.days[5].tempmax] : null}</p>
        <p>Min: {data.days ? [data.days[5].tempmin] : null}</p>
      </div>
    </div>
  );
}

export default App;
