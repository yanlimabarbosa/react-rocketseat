import logo from "../../assets/Logo.png"
import styles from "./Header.module.css"

export function Header() {
  return (
    <h2>
      {" "}
      <div className={styles.header}>
        <img src={logo} />
      </div>
    </h2>
  )
}
