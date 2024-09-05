import styles from "./ListEmpty.module.css"
import clipboardImage from "../../../assets/clipboard.png" // Adjust the path as needed

export function ListEmpty() {
  return (
    <div className={styles.container}>
      <img src={clipboardImage} alt="ícone de prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
