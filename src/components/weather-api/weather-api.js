import "./weather-api.css";
import { Component } from "react";

class GetWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "https://openweathermap.org/img/wn/10d@2x.png",
    };
  }
  onDailyChange = async () => {
    const gsDayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const api_weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=55.53&lon=28.59&appid=ee030783f13a128def7893203d283bc6`
    )
      .then((resp) => resp.json())
      .then((data) => data);

    this.setState({
      weather: api_weather.list[0].weather[0].main,
      name: api_weather.city.name,
      temp: (api_weather.list[0].main.temp - 273).toFixed(0) + "°",
      icon: `https://openweathermap.org/img/wn/${api_weather.list[0].weather[0].icon}@2x.png`,
      date: gsDayNames[new Date(api_weather.list[0].dt_txt).getDay()],
      date2: gsDayNames[new Date(api_weather.list[0].dt_txt).getDay() + 1],
      date3: gsDayNames[new Date(api_weather.list[0].dt_txt).getDay() + 2],
      date4: gsDayNames[new Date(api_weather.list[0].dt_txt).getDay() + 3],
    });
  };

  render() {
    const { icon, temp, date, date2, date3, date4, weather_icon1 } = this.state;
    return (
      <div>
        <button onClick={this.onDailyChange} className="daily">
          Daily
        </button>
        <button onClick={this.onHourlyChange} className="hourly">
          Hourly
        </button>
        <div className="main-weather">
          <img src={icon} className="today-weather" />
        </div>
        <div className="today">
          <p className="today-p">Today</p>
          {temp}
        </div>
        <div className="another-weather">
          <div className="block-weather">
            <p className="another-day">{date}</p>
          </div>
          <div className="block-weather">
            <p className="another-day">{date2}</p>
          </div>
          <div className="block-weather">
            <p className="another-day">{date3}</p>
          </div>
          <div className="block-weather">
            <p className="another-day">{date4}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GetWeather;
