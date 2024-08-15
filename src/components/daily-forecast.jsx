import React from "react";
import DailyWeather from "./daily-weather";

function DailyForecast() {
  return (
    <div>
      <div className="justify-items-start">
        <h1 className="text-4xl font-bold">Daily Forecast</h1>
      </div>
      <div className="flex-row">
        <DailyWeather day={"Sunday"} temp={"34"} />
        <DailyWeather />
        <DailyWeather />
        <DailyWeather />
        <DailyWeather />
        <DailyWeather />
      </div>
    </div>
  );
}

export default DailyForecast;
