import React from "react";
import DailyWeather from "./daily-weather";

function DailyForecast({ forecast }) {
  const days = forecast.list.filter((item, index) => index % 8 === 0); // Get the forecast for each day (every 24 hours)

  return (
    <div className="p-4">
      <div className="justify-items-start mb-6">
        <h1 className="text-4xl font-bold text-center">5-Day Forecast</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {days.map((day, index) => (
          <DailyWeather
            key={index}
            day={new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            temp={day.main.temp}
            weather={day.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
