import daisyui from "daisyui";
import React from "react";

function DailyWeather({ day, temp }) {
  return (
    <div>
      <div className="flex-row card bg-sky-200 text-2xl w-96 m-10 ">
        <div className="card-body m-0 p-0">
          <h2>{day}</h2>
          <span></span>
          <h2>{temp}</h2>
        </div>
      </div>
    </div>
  );
}

export default DailyWeather;
