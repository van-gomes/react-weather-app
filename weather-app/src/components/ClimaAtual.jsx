import styles from "./ClimaAtual.module.css";

export function ClimaAtual({ clima }) {
  return (
    <div className={styles.climaInfo}>
      <h3>{clima.name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}°C</p>
      <p>{clima.weather[0].description}</p>
    </div>
  );
}
