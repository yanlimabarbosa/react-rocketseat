import { PlusCircle } from "@phosphor-icons/react"
import styles from "./App.module.css"
import { Button } from "./components/Button/Button.js"
import { Input } from "./components/Input/Input.js"
import { Header } from "./components/Header/Header.js"
import { ListHeader } from "./components/List/Header/ListHeader.js"
import { ListEmpty } from "./components/List/Empty/ListEmpty.js"
import { ListItem } from "./components/List/Item/ListItem.js"
import { useState } from "react"
export interface Todo {
  id: number
  isChecked: boolean
  todoName: string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState<string>("")

  function handleAddNewTask() {
    if (newTask.length < 1) return
    setTodos((todos) => [
      ...todos,
      {
        isChecked: false,
        todoName: newTask,
        id: new Date().getTime(),
      },
    ])
    setNewTask("")
  }

  function handleDeleteTask(todoId: number) {
    const confirmDelete = window.confirm("Deseja realmente apagar essa tarefa?")

    if (confirmDelete) {
      setTodos(todos.filter((todo) => todo.id !== todoId))
    }
  }

  function handleToggleChecked(todoIdToToggle: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoIdToToggle
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      )
    )
  }

  const sortedTodos = [...todos].sort((a, b) => b.id - a.id)

  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.createTaskContainer}>
          <Input
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value)
            }}
            placeholder="Adicione uma nova tarefa"
          />
          <Button onClick={handleAddNewTask}>
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader todos={sortedTodos} />

          {sortedTodos.length < 1 ? (
            <ListEmpty />
          ) : (
            sortedTodos.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  handleDeleteTask={handleDeleteTask}
                  handleToggleChecked={handleToggleChecked}
                />
              )
            })
          )}
        </div>
      </section>
    </>
  )
}

export default App
