import DarkMode from "../components/DarkMode";
import HeaderLogo from "../assets/Header logo (1).svg";
import { useRef } from "react";

const Header = ({ updateCityName }) => {
  const handleCityChange = (event) => {
    if (event.key === "Enter") {
      const city = event.target.value.trim();
      if (city) updateCityName(city);
    }
  };
  return (
    <div className="header">
      <div className="logo-box">
        <div className="logo-img">
          <a href="#">
            <img src={HeaderLogo} alt="das" />
          </a>
        </div>
        <h2 className="logo-text">REACT WEATHER</h2>
      </div>
      <div className="search-box">
        <div className="theme-mode">
          <DarkMode />
        </div>
        <div className="search-input">
          <input
            onKeyDown={handleCityChange}
            type="text"
            placeholder="Выбрать город"
            defaultValue={"Tashkent"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
