import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/129100238?v=4" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yan Barbosa</strong>
              <time title="11 de maio às 08:13h" dateTime="2025-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <div>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </div>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
