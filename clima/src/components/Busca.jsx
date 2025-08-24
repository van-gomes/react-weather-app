export function Busca({ cidade, setCidade, buscarClima }) {
  return (
    <>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
      />
      <button onClick={buscarClima}>Buscar</button>
    </>
  );
}
