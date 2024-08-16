import daisyui from "daisyui";
import React from "react";

function DailyWeather({ day, temp, weather }) {
  return (
    <div className="card bg-sky-200 text-center p-4 shadow-md">
      <div className="card-body">
        <h2 className="text-xl font-semibold">{day}</h2>
        <h2 className="text-2xl font-bold">{temp}°F</h2>
        <p className="text-lg">{weather}</p>
      </div>
    </div>
  );
}

export default DailyWeather;
