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
      setLocation("");
    }
  };

  // const progress = useState(0);

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
                src={
                  window.location.origin +
                  `/images/${
                    data.currentConditions
                      ? [data.currentConditions.icon]
                      : null
                  }.svg`
                }
                alt="weather symbol"
                className="weather-symbol"
              />
              <p className="temp">
                {data.currentConditions ? [data.currentConditions.temp] : null}
                <span>&#8451;</span>
              </p>
              <p className="description">
                {data.currentConditions
                  ? [data.currentConditions.conditions]
                  : null}
              </p>
            </div>
          </div>

          <div className="overview-panel">
            <div className="overview-block">
              <div className="overview-head-container">
                <p className="overview-head">Day Overview</p>
              </div>
              <div className="overview-top-container">
                <div className="overview-top-block">
                  <p className="overview-subhead-top">Humidity</p>
                  <p className="overview-value-top">
                    {data.currentConditions
                      ? [data.currentConditions.humidity]
                      : null}
                    %
                  </p>
                  <div className="progress-container">
                    <div className="progress-bar-labels">
                      <p className="progress-label"></p>
                      <p className="progress-label">%</p>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill-humidity"
                        style={{
                          width: `${[
                            data.currentConditions
                              ? [data.currentConditions.humidity]
                              : null,
                          ]}%`,
                        }}
                      ></div>
                      <div className="progress-bar-labels">
                        <p className="progress-label">0</p>
                        <p className="progress-label">100</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overview-top-block">
                  <p className="overview-subhead-top">Cloud Cover</p>
                  <p className="overview-value-top">
                    {data.currentConditions
                      ? [data.currentConditions.cloudcover]
                      : null}
                    %
                  </p>
                  <div className="progress-container">
                    <div className="progress-bar-labels">
                      <p className="progress-label"></p>
                      <p className="progress-label">%</p>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill-cloud"
                        style={{
                          width: `${[
                            data.currentConditions
                              ? [data.currentConditions.cloudcover]
                              : null,
                          ]}%`,
                        }}
                      ></div>
                      <div className="progress-bar-labels">
                        <p className="progress-label">0</p>
                        <p className="progress-label">100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-middle-container">
                <div className="overview-middle-block">
                  <p className="overview-subhead">Max temp.</p>
                  <p className="overview-value">
                    {data.days ? [data.days[0].tempmax] : null}
                    <span>&#8451;</span>
                  </p>
                </div>
                <div className="overview-middle-block">
                  <p className="overview-subhead">Min temp.</p>
                  <p className="overview-value">
                    {data.days ? [data.days[0].tempmin] : null}
                    <span>&#8451;</span>
                  </p>
                </div>
                <div className="overview-middle-block">
                  <p className="overview-subhead">Sunrise</p>
                  <p className="overview-value">
                    {data.currentConditions
                      ? [data.currentConditions.sunrise]
                      : null}
                  </p>
                </div>
                <div className="overview-middle-block">
                  <p className="overview-subhead">Sunset</p>
                  <p className="overview-value">
                    {data.currentConditions
                      ? [data.currentConditions.sunset]
                      : null}
                  </p>
                </div>
              </div>
              <div className="overview-bottom-container">
                <div className="overview-head-container">
                  <p className="overview-head">5 Day Forcast</p>
                </div>
                <div className="overview-bottom-forcast">
                  <div className="overview-bottom-block">
                    <p className="overview-bottom-subhead">Tomorrow</p>
                    <img
                      src={
                        window.location.origin +
                        `/images/${data.days ? [data.days[1].icon] : null}.svg`
                      }
                      alt="weather symbol"
                      className="weather-symbol-small"
                    />
                    <p className="overview-bottom-decription">
                      {data.days ? [data.days[1].conditions] : null}
                    </p>
                    <div className="overview-temp-container">
                      <p className="overview-small-subhead">
                        {data.days ? [data.days[1].tempmax] : null}
                        <span>&#8451;</span>
                      </p>
                      <p className="overview-small-subhead-fade">
                        {data.days ? [data.days[1].tempmin] : null}
                        <span>&#8451;</span>
                      </p>
                    </div>
                  </div>
                  <div className="overview-bottom-block">
                    <p className="overview-bottom-subhead">
                      {data.days ? [data.days[2].datetime] : null}
                    </p>
                    <img
                      src={
                        window.location.origin +
                        `/images/${data.days ? [data.days[2].icon] : null}.svg`
                      }
                      alt="weather symbol"
                      className="weather-symbol-small"
                    />
                    <p className="overview-bottom-decription">
                      {data.days ? [data.days[2].conditions] : null}
                    </p>
                    <div className="overview-temp-container">
                      <p className="overview-small-subhead">
                        {data.days ? [data.days[2].tempmax] : null}
                        <span>&#8451;</span>
                      </p>
                      <p className="overview-small-subhead-fade">
                        {data.days ? [data.days[2].tempmin] : null}
                        <span>&#8451;</span>
                      </p>
                    </div>
                  </div>
                  <div className="overview-bottom-block">
                    <p className="overview-bottom-subhead">
                      {data.days ? [data.days[3].datetime] : null}
                    </p>
                    <img
                      src={
                        window.location.origin +
                        `/images/${data.days ? [data.days[3].icon] : null}.svg`
                      }
                      alt="weather symbol"
                      className="weather-symbol-small"
                    />
                    <p className="overview-bottom-decription">
                      {data.days ? [data.days[3].conditions] : null}
                    </p>
                    <div className="overview-temp-container">
                      <p className="overview-small-subhead">
                        {data.days ? [data.days[3].tempmax] : null}
                        <span>&#8451;</span>
                      </p>
                      <p className="overview-small-subhead-fade">
                        {data.days ? [data.days[3].tempmin] : null}
                        <span>&#8451;</span>
                      </p>
                    </div>
                  </div>
                  <div className="overview-bottom-block">
                    <p className="overview-bottom-subhead">
                      {data.days ? [data.days[4].datetime] : null}
                    </p>
                    <img
                      src={
                        window.location.origin +
                        `/images/${data.days ? [data.days[4].icon] : null}.svg`
                      }
                      alt="weather symbol"
                      className="weather-symbol-small"
                    />
                    <p className="overview-bottom-decription">
                      {data.days ? [data.days[4].conditions] : null}
                    </p>
                    <div className="overview-temp-container">
                      <p className="overview-small-subhead">
                        {data.days ? [data.days[4].tempmax] : null}
                        <span>&#8451;</span>
                      </p>
                      <p className="overview-small-subhead-fade">
                        {data.days ? [data.days[4].tempmin] : null}
                        <span>&#8451;</span>
                      </p>
                    </div>
                  </div>
                  <div className="overview-bottom-block">
                    <p className="overview-bottom-subhead">
                      {data.days ? [data.days[5].datetime] : null}
                    </p>
                    <img
                      src={
                        window.location.origin +
                        `/images/${data.days ? [data.days[5].icon] : null}.svg`
                      }
                      alt="weather symbol"
                      className="weather-symbol-small"
                    />
                    <p className="overview-bottom-decription">
                      {data.days ? [data.days[5].conditions] : null}
                    </p>
                    <div className="overview-temp-container">
                      <p className="overview-small-subhead">
                        {data.days ? [data.days[5].tempmax] : null}
                        <span>&#8451;</span>
                      </p>
                      <p className="overview-small-subhead-fade">
                        {data.days ? [data.days[5].tempmin] : null}
                        <span>&#8451;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
