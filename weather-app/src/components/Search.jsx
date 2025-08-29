import styles from "./Search.module.css";

export function Search({ city, setCity, fetchWeatherData }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
        className={styles.inputCity}
      />
      <button onClick={fetchWeatherData} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}
