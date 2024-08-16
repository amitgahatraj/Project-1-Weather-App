import React, { useState } from "react";

function Navigation({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(inputValue); // Pass the input value to the parent component
      setInputValue(""); // Clear the input field after search
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">WeatherApp</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
              className="input input-bordered max-w-screen-sm md:w-auto"
            />
          </div>

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="src\assets\weather-app-logo.jfif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
