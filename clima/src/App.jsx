import { useState } from "react";
import axios from "axios";
import { Busca } from "./components/Busca";
import { ClimaAtual } from "./components/ClimaAtual";
import { Previsao } from "./components/Previsao";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setClima(respostaClima.data);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  console.log(clima);

  return (
    <div>
      <h1>Condições Climáticas</h1>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
