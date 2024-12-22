import React from "react";
import SvgSun from "../assets/clearsky.png";
import Temperatura from "../assets/brokenclouds.png";
import cloud from "../assets/Cloud image.png";
// svg icons
import svgTemperatura from "../assets/temp.svg";
import svgPresure from "../assets/pressure.svg";
import svgPrecipation from "../assets/precipitation.svg";
import svgWind from "../assets/wind.svg";
import { weatherIcon } from "../data/staticData";

const Main = ({ forecast }) => {
  if (!forecast || !forecast.list || forecast.list.length === 0) {
    return <div></div>;
  }

  const { city, list } = forecast;
  let datta = list[0]?.dt_txt.split("");
  let res = datta.slice(11, 16).join("");
  // wether icoon
  const matchingIcon = weatherIcon.find((elem) =>
    elem.iconIds.includes(list[0].weather[0].id)
  );
  const iconSrc = matchingIcon ? matchingIcon.photoIcon : "";
  return (
    <div className="main">
      <div className="weather-main">
        <div className="main-top">
          <div>
            <h3>{list[0]?.main?.temp} °</h3>
            <h5>Сегодня </h5>
          </div>
          <img src={iconSrc} alt="dsa" />
        </div>
        <div className="main-bottom">
          <p>последнее обновление: {res} </p>
          <p>Город: {forecast?.city?.name}</p>
        </div>
      </div>
      <div className="weather-info">
        <div className="info-cloudimg">
          <img src={cloud} alt="cloud" />
        </div>
        <div className="data-infobox">
          <div className="data-info">
            <div className="data-img">
              <img src={svgTemperatura} alt="adsdqw" />
            </div>
            <h3>Температура</h3>
            <p>
              {list[0].main.temp}° - ощущается как {list[0].main.feels_like}°
            </p>
          </div>
          <div className="data-info">
            <div className="data-img">
              <img src={svgPresure} alt="adsdqw" />
            </div>
            <h3>Давление</h3>
            <p>{list[0]?.main?.pressure} мм ртутного столба - нормальное</p>
          </div>
          <div className="data-info">
            <div className="data-img">
              <img src={svgPrecipation} alt="adsdqw" />
            </div>
            <h3>Осадки </h3>
            <p>Без осадков</p>
          </div>
          <div className="data-info">
            <div className="data-img">
              <img src={svgWind} alt="adsdqw" />
            </div>
            <h3>Ветер</h3>
            <p>
              {list[0].wind.gust} м/с до {list[0].wind.speed} м/с
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
