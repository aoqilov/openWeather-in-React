import { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import axios from "axios";
import ShowHours from "./layout/ShowHours";
import Loading from "./components/Loading";

const App = () => {
  const apiKey = "6d533f48c1a82724d9624fcf0765d929";
  const [cityName, setCityName] = useState("tashkent");
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    SetLoading(true); // Yuklanish holatini boshlash
    SetError(null); // Xatolikni tozalash
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`
      );
      setForecast(response.data); // Ma'lumotni saqlash
    } catch (err) {
      SetError("Ma'lumotni yuklashda xatolik yuz berdi." + err); // Xatolikni saqlash
    } finally {
      SetLoading(false); // Yuklanish holatini to'xtatish
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [cityName]);

  const updateCityName = (city) => setCityName(city);
  return (
    <div className="app">
      <div className="container">
        <Header updateCityName={updateCityName} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Main forecast={forecast} />
            <ShowHours forecast={forecast} />
            <Footer forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
