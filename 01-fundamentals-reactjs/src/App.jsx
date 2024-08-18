import { Header } from "./components/Header"
import { Post } from "./Post"
import "./styles.css"

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Yan Barbosa"
        content="Lorem ipsum dolor sit ametmos laborum officiis laboriosam culpa totam quisquam, mollitia exercitationem nostrum aut voluptatibus!"
      />
      <Post author="Joseph Benter" content="Really cool!" />
    </>
  )
}
