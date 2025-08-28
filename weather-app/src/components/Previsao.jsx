import styles from "./Previsao.module.css";

export const Previsao = ({ previsoes }) => {
  return (
    <div className={styles.previsaoContainer}>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li key={index}>
            <img
              src={`https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            {previsao.main.temp}°C - {previsao.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};
