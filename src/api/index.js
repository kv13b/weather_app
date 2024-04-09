const URL =
  " https://api.weatherapi.com/v1/current.json?key= 93fcc416270a499e906104111240804";
export const getapiofCity = async (city) => {
  const base = await fetch(`${URL}&q=${city}&aqi=yes`);
  return await base.json();
};

export const getapiofLocation = async (lat, lon) => {
  const base = await fetch(`${URL}&q=${lat},${lon}&aqi=yes`);
  return await base.json();
};
