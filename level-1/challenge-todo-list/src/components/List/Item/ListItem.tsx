import { Check, Trash } from "@phosphor-icons/react"
import styles from "./ListItem.module.css"

export function ListItem() {
  return (
    <div className={styles.container}>
      <label>
        {/* <input type="checkbox" /> */}
        <span className={`${styles.checkbox} ${styles.checked}`}>
          <Check size={16} />
        </span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </label>
      <button>
        <Trash size={16} />
      </button>
    </div>
  )
}
