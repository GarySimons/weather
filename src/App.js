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

      <p>Day 1: </p>
      <p>Day 2: </p>
      <p>Day 3: </p>
      <p>Day 4: </p>
      <p>Day 5: </p>
    </div>
  );
}

export default App;
