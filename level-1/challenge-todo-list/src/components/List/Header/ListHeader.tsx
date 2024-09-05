import { Todo } from "../../../App"
import styles from "./ListHeader.module.css"

interface ListHeaderProps {
  todos: Todo[]
}

export function ListHeader({ todos }: ListHeaderProps) {
  const finishedTodos = todos.filter((todo) => {
    return todo.isChecked === true
  })

  return (
    <div className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{todos?.length}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>
          {finishedTodos?.length} de {todos.length}
        </span>
      </aside>
    </div>
  )
}
