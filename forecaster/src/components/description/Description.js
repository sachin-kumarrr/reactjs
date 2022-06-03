import React, { useEffect, useState } from "react";
import "./Description.css";
import axios from "axios";

function Description() {
  const apiKey = "0dad77c8030ee48f14e08a7d9335a5f1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${apiKey}&units=metric`;
  const [data, setData] = useState("Mumbai");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      //   console.log(response.data);
      setData(response.data);
    }
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="description">
      <div className="weather-state">
        <div className="weather-state-name">{data.name}</div>
        <div className="weather-state-date">May 25, 2022</div>
      </div>

      <div className="weather-temperature-description">
        <div className="weather-temperature-info">
          <div className="weather-temperature">
            {data.main ? data.main.temp.toFixed() : null}°C
          </div>
          <div className="weather-temperature-about">
            Feels like {data.main ? data.main.feels_like.toFixed() : null}°C
          </div>
        </div>
        <div className="weather-name">
          <div className="weather-name-info">
            {data.weather ? data.weather[0].main : null}
          </div>
          <div className="weather-name-img">
            {data.weather ? data.weather[0].icon : null}
          </div>
        </div>
      </div>

      <div className="weather-information">
        <div className="weather-information-details">
          <div className="weather-information-name">Humidity</div>
          <div className="weather-information-info">
            {data.main ? data.main.humidity : null}%
          </div>
        </div>
        <div className="weather-information-details">
          <div className="weather-information-name">Pressure</div>
          <div className="weather-information-info">
            {data.main ? data.main.pressure : null}Pha
          </div>
        </div>
        <div className="weather-information-details">
          <div className="weather-information-name">Visibility</div>
          <div className="weather-information-info">
            {data.visibility / 1000}kms
          </div>
        </div>
        <div className="weather-information-details">
          <div className="weather-information-name">Wind Speed</div>
          <div className="weather-information-info">
            {data.wind ? data.wind.speed : null}m/s
          </div>
        </div>
        <div className="weather-information-details">
          <div className="weather-information-name">Min temp</div>
          <div className="weather-information-info">
            {data.main ? data.main.temp_min.toFixed() : null}°C
          </div>
        </div>
        <div className="weather-information-details">
          <div className="weather-information-name">Max temp</div>
          <div className="weather-information-info">
            {data.main ? data.main.temp_max.toFixed() : null}°C
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
