import React from "react";

function Stats({ day, date, time, country, city, weather, temp }) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-md bg-sky-200 m-10">
      <div className="stat">
        <div className="text-4xl">Sunday</div>
        <div className="text-3xl">10 Dec 2022</div>
        <div className="text-2xl">11:11 am</div>
      </div>

      <div className="stat">
        <div className="stat-title">Country</div>
        <div className="stat-value">City</div>
        <div className="stat-desc">Current Weather Condition</div>
      </div>

      <div className="stat">
        <div className="text-5xl justify-between">Temp °F</div>
      </div>
    </div>
  );
}

export default Stats;
