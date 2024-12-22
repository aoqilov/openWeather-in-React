import React from "react";
import { weekDaysName, weatherIcon, months } from "/src/data/staticData";

const WeekDay = ({ everyEighthObject }) => {
  return (
    <>
      {everyEighthObject.map((item) => {
        const date = new Date(item.dt * 1000);
        const dayName = weekDaysName[date.getDay()];
        const formattedDate = `${date.getDate()} ${months[date.getMonth()]}`;

        const matchingIcon = weatherIcon.find((elem) =>
          elem.iconIds.includes(item.weather[0].id)
        );

        // Fallback icon if no matching weather condition
        const iconSrc = matchingIcon ? matchingIcon.photoIcon : "";
        const iconAlt = item.weather[0].description;

        return (
          <div key={item.dt} className="week">
            <h2 className="week-title">{dayName}</h2>
            <p className="week-date">{formattedDate}</p>
            <div className="week-img">
              <img src={iconSrc} alt={iconAlt} />
            </div>
            <h5 className="week-gradus">{item.main.temp_max} °</h5>
            <p className="week-gradusNight">{item.main.temp_min} °</p>
            <p className="week-coment">{item.weather[0].description}</p>
          </div>
        );
      })}
    </>
  );
};

export default WeekDay;
