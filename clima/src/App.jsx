import { useState, useEffect } from "react";
import axios from "axios";
import { Busca } from "./components/Busca";
import { ClimaAtual } from "./components/ClimaAtual";
import { Previsao } from "./components/Previsao";
import styles from "./App.module.css";

export function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setCidade(resposta.data.name);
      setClima(resposta.data);
    });
  }, [apiKey]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cidade
        )}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          cidade
        )}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      // IMPORTANTE: 'units=metric' já retorna °C. Não converta novamente.
      // Se quiser converter manualmente, remova 'units=metric' e faça a conversão.
      // respostaClima.data.main.temp = (respostaClima.data.main.temp - 32) * (5 / 9);

      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.titulo}>Condições Climáticas</h1>

      <div className={styles.bloco}>
        <Busca
          cidade={cidade}
          setCidade={setCidade}
          buscarClima={buscarClima}
        />
      </div>

      {clima && (
        <div className={styles.bloco}>
          <ClimaAtual clima={clima} />
        </div>
      )}

      {previsao.length > 0 && (
        <div className={styles.bloco}>
          <Previsao previsoes={previsao} />
        </div>
      )}
    </div>
  );
}
