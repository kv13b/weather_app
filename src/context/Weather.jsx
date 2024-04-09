import { createContext, useContext, useState } from "react";
import { getapiofCity, getapiofLocation } from "../api/index";
const weatherContext = createContext();
export const useWeather = () => {
  return useContext(weatherContext);
};
export const Weatherprovider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const fetchdata = async () => {
    const res = await getapiofCity(searchCity);
    setData(res);
  };
  const fetchLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getapiofLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <weatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchdata, fetchLoc }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
