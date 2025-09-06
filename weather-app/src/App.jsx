import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import styles from "./App.module.css";

export function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setCity(response.data.name);
      setWeather(response.data);
    });
  }, [apiKey]);

  const fetchWeatherData = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Condições Climáticas</h1>

        <div className={styles.block}>
          <Search
            city={city}
            setCity={setCity}
            fetchWeatherData={fetchWeatherData}
          />
        </div>

        {weather && (
          <div className={styles.block}>
            <CurrentWeather weather={weather} />
          </div>
        )}

        {forecast.length > 0 && (
          <div className={styles.block}>
            <Forecast forecasts={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}
