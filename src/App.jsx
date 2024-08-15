import { useEffect, useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./App.css";
import Navigation from "./components/navigation-bar";
import Stats from "./components/stats";
import DailyForecast from "./components/daily-forecast";

//https://api.openweathermap.org/data/2.5/weather?q=Pokhara&appid=c7750b5dce998b9a9f0d393f67ed44bc

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?lat=41.652805&lon=-83.537865&appid=c7750b5dce998b9a9f0d393f67ed44bc"
  //     );
  //     const data = response.json();
  //     setData({ ...data });
  //   };
  // }, []);

  // fetchData();

  // console.log(data);

  return (
    <div className=" max min-h-screen m-0 p-0">
      <Navigation />
      <Stats />
      <DailyForecast />
    </div>
  );
}

export default App;
