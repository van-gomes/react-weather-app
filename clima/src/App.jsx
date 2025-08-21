import React from "react";
import { Busca } from "./components/Busca";
import { ClimaAtual } from "./components/ClimaAtual";
import { Previsao } from "./components/Previsao";

function App() {
  return (
    <div>
      <h1>Condições climáticas</h1>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
