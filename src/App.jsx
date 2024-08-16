import { useEffect, useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./App.css";
import Navigation from "./components/navigation-bar";
import Stats from "./components/stats";
import DailyForecast from "./components/daily-forecast";

//https://api.openweathermap.org/data/2.5/weather?q=Pokhara&appid=c7750b5dce998b9a9f0d393f67ed44bc

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?lat=41.652805&lon=-83.537865&appid=c7750b5dce998b9a9f0d393f67ed44bc"
  //     );
  //     const data = response.json();
  //     setData({ ...data });
  //   };

  //   fetchData();
  // }, []);
  //------------------------------------------------------------------------------
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c7750b5dce998b9a9f0d393f67ed44bc"
  //     );
  //     // You can handle the response here, for example:
  //     const data = await response.json();
  //     console.log(data);
  //     setData(data);
  //   };

  //   fetchData(); // Call the async function inside useEffect
  // }, []);

  //------------------------------------------------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c7750b5dce998b9a9f0d393f67ed44bc`
          );

          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching the weather data:", error);
        }
      }
    };

    fetchData();
  }, [city]); // Fetch data whenever the city changes

  return (
    // <div className=" max min-h-screen m-0 p-0">
    //   <Navigation />
    //   <Stats
    //     temp={"data.main.temp"}
    //     weather={"data.sys.weather"}
    //     city={"data.name"}
    //   />
    //   <DailyForecast />
    // </div>

    <div className="max min-h-screen m-0 p-0">
      <Navigation onSearch={setCity} />
      {data && (
        <Stats
          temp={data.main.temp}
          weather={data.weather[0].description}
          country={data.sys.country}
          city={data.name}
        />
      )}
      <DailyForecast />
    </div>
  );
}

export default App;
