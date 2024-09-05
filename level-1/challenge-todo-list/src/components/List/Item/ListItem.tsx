import { Check, Trash } from "@phosphor-icons/react"
import styles from "./ListItem.module.css"
import { Todo } from "../../../App"

interface ListItemProps {
  todo: Todo
  handleDeleteTask: (todo: Todo) => void
  handleToggleChecked: (todo: Todo) => void
}

export function ListItem({
  todo,
  handleDeleteTask,
  handleToggleChecked,
}: ListItemProps) {
  const checkbox = todo.isChecked ? "checked" : "unchecked"

  return (
    <div className={styles.container}>
      <label className={`${styles.checkbox} ${styles[checkbox]}`}>
        <span onClick={() => handleToggleChecked(todo)}>
          {todo.isChecked && <Check size={16} />}
        </span>

        <p>{todo.todoName}</p>
      </label>
      <button onClick={() => handleDeleteTask(todo)}>
        <Trash size={16} />
      </button>
    </div>
  )
}
