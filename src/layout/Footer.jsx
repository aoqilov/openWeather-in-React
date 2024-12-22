import React, { useState } from "react";
import WeekDay from "../components/WeekDay";

const Footer = ({ forecast }) => {
  const [active, setActive] = useState(true);

  function pressBtn() {
    setActive(!active);
  }
  const everyEighthObject =
    forecast && forecast.list
      ? forecast.list.filter((_, index) => (index + 1) % 8 === 0)
      : [];

  return (
    <div className="footer">
      <div className="footer-btn">
        <button onClick={pressBtn} className={active ? "active" : ""}>
          На неделю
        </button>
        <button onClick={pressBtn} className={active ? "" : "active"}>
          Отменить
        </button>
      </div>
      {active && (
        <div className="week-box">
          <WeekDay everyEighthObject={everyEighthObject} />
        </div>
      )}
    </div>
  );
};

export default Footer;
