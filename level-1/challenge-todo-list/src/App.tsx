import { PlusCircle } from "@phosphor-icons/react"
import styles from "./App.module.css"
import { Button } from "./components/Button/Button.js"
import { Input } from "./components/Input/Input.js"
import { Header } from "./components/Header/Header.js"
import { ListHeader } from "./components/List/Header/ListHeader.js"

function App() {
  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.createTaskContainer}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <ListHeader />
      </section>
    </>
  )
}

export default App
