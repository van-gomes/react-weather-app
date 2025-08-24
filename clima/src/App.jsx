import { useState } from "react";
import { Busca } from "./components/Busca";
import { ClimaAtual } from "./components/ClimaAtual";
import { Previsao } from "./components/Previsao";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";
  console.log("API Key:", apiKey);

  return (
    <div>
      <h1>Condições Climáticas</h1>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
