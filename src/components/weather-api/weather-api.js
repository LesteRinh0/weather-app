const getWeather = async () => {
  const api_url = await fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=ee030783f13a128def7893203d283bc6`
  );
  const data = await api_url.json();
  return <div className="weather-api"></div>;
};

export default getWeather;
