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
      },
    ])
    setNewTask("")
  }

  function handleDeleteTask(deletedTodo: Todo) {
    setTodos(todos.filter((todo) => todo !== deletedTodo))
  }

  function handleToggleChecked(todoToToggle: Todo) {
    setTodos(
      todos.map((todo) =>
        todo === todoToToggle ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    )
  }

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
          <ListHeader todos={todos} />

          {todos?.length < 1 ? (
            <ListEmpty />
          ) : (
            todos?.map((todo) => {
              return (
                <ListItem
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
