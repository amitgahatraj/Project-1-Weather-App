import React from "react";

function Stats({
  country,
  city,
  weather,
  temp,
  humidity,
  windSpeed,
  visibility,
}) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-md bg-sky-200 m-10">
      <div className="stat">
        <div className="text-4xl font-extrabold">
          {city},{country}
        </div>

        <div className="text-2xl">{weather} </div>
      </div>

      <div className="stat">
        <div className="stat-title">Temperature</div>
        <div className="stat-value">{temp}°F</div>
      </div>

      <div className="stat">
        <div className="stat-title">Humidity</div>
        <div className="stat-value">{humidity}%</div>
      </div>

      <div className="stat">
        <div className="stat-title">Wind Speed</div>
        <div className="stat-value">{windSpeed} mph</div>
      </div>

      <div className="stat">
        <div className="stat-title">Visibility</div>
        <div className="stat-value">{visibility / 1000} km</div>
      </div>
    </div>
  );
}

export default Stats;
