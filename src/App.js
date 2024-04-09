import React from "react";
import Card from "./components/Card";
import Input from "./components/input";
import Button from "./components/button";
import { useWeather } from "./context/Weather";
import "./App.css";
import { useEffect } from "react";
function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchLoc();
  }, []);
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <h1>Real-Time Weather Forecast App</h1>
      <Input />
      <Button onClick={weather.fetchdata} value="Search" />
      <Card />
      <Button onClick={handleRefresh} value="Refresh" />
    </div>
  );
}

export default App;
