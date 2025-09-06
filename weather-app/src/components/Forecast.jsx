import styles from "./Forecast.module.css";

export const Forecast = ({ forecasts }) => {
  if (!Array.isArray(forecasts) || forecasts.length === 0) {
    return null;
  }

  return (
    <div className={styles.forecastCard}>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {forecasts.map((item, index) => (
          <li key={index}>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather?.[0]?.icon}.png`}
              alt={item.weather?.[0]?.description ?? "Weather icon"}
            />
            {Math.round(item.main?.temp)}°C - {item.weather?.[0]?.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
