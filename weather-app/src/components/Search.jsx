import styles from "./Search.module.css";

export function Search({ city, setCity, fetchWeatherData }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite uma cidad"
        className={styles.inputCity}
      />
      <button onClick={fetchWeatherData} className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
}
