import React, { useState } from "react";
import { weatherIcon } from "../data/staticData";

const ShowHours = ({ forecast }) => {
  const [isOpen, setIsOpen] = useState(false);
  function showModal() {
    setIsOpen(!isOpen);
  }
  if (!forecast || !forecast.list || forecast.list.length === 0) {
    return <div></div>;
  }
  let dayhours = forecast.list.slice(0, 8);
  console.log(isOpen);

  return (
    <div className="hours">
      <div className="btn-hours">
        <button className={isOpen ? "active" : ""} onClick={showModal}>
          Open each 3hours daily
        </button>
      </div>
      <div className={`hours-box ${isOpen ? "show" : ""}`}>
        {dayhours.map((item) => {
          let eachhours = item.dt_txt.split("");
          let resultHours = eachhours.slice(11, 16).join("");
          console.log(resultHours);
          const matchingIcon = weatherIcon.find((elem) =>
            elem.iconIds.includes(item.weather[0].id)
          );
          const iconSrc = matchingIcon ? matchingIcon.photoIcon : "";

          return (
            <div className="card" key={item.dt}>
              <h2 className="card-time">{resultHours}</h2>
              <div className="card-img">
                <img src={iconSrc} alt={item.weather[0].description} />
              </div>
              <p className="card-coment">{item.weather[0].description}</p>
              <h5 className="card-gradus">{item.main.temp} °</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowHours;
