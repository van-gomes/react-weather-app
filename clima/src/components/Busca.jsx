import styles from "./Busca.module.css";

export function Busca({ cidade, setCidade, buscarClima }) {
  return (
    <>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
        className={styles.inputCidade}
      />
      <button onClick={buscarClima} className={styles.botaoBuscar}>
        Buscar
      </button>
    </>
  );
}
