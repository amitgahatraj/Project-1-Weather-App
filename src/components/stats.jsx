import React from "react";

function Stats({ day, date, time, country, city, weather, temp }) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-md bg-sky-200 m-10">
      <div className="stat">
        <div className="text-4xl font-extrabold">{country}</div>
        <div className="text-3xl font-bold">{city}</div>
        <div className="text-2xl">Live Weather: {weather}</div>
      </div>

      <div className="stat">
        <div className="stat-title"></div>
        <div className="stat-value"></div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat">
        <div className="text-5xl justify-between">Temperature: {temp}</div>
      </div>
    </div>
  );
}

export default Stats;
