import Botao from "../components/Botao";
import styles from "../styles/Telainicio.module.css";

export default function Home(){
  return(
    <div className={styles.inicio}>
      <h1 className={styles.titulo}>? Quiz !</h1>
      <hr className={styles.linha}/>
      <span>Um jogo de perguntas</span>
      <Botao href="/perguntas" texto="Iniciar Quiz"/>
    </div>
  )
}