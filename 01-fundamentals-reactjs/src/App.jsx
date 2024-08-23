import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Yan Barbosa"
            content="Lorem ipsum dolor sit ametmos laborum officiis laboriosam culpa totam quisquam, mollitia exercitationem nostrum aut voluptatibus!"
          />
          <Post author="Joseph Benter" content="Really cool!" />
        </main>
      </div>
    </>
  )
}
