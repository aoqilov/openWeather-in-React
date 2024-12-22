import { useState } from "react";
import SvgSun from "../assets/clearsky.png";
import svgDark from "../assets/invert_colors_black_24dp 1 (1).svg";
const DarkMode = () => {
  const [mode, setMode] = useState(false);
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  function changeMode() {
    setMode(!mode);
    if (mode === true) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }

  return (
    <>
      <button className="mode-btn" onClick={changeMode}>
        <img src={mode ? svgDark : SvgSun} alt="logo" />
      </button>
    </>
  );
};

export default DarkMode;
