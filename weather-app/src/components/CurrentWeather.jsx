import styles from "./CurrentWeather.module.css";

export function CurrentWeather({ weather }) {
  return (
    <div className={styles.weatherInfo}>
      <h3>{weather.name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}
