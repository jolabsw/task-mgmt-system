import { useEffect, useState } from "react"
import useHttp from "./hooks/use-http"
import type { Tasks } from "./types/tasks"

import Header from "./components/Header/header"
import TasksList from "./components/Tasks/TaskList"

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const { isLoading, error, sendRequest: fetchTasks } = useHttp<Tasks[]>()

  useEffect(() => {
    const assignTasks = (taskData: Tasks[]) => {
      setTasks(taskData)
    }

    fetchTasks({
      url: "http://localhost:8000/api/v1/tasks"
    }, assignTasks)
  }, [])

  return (
    <main>
      <Header />
      <section>
        <h2>Add New Task</h2>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" placeholder="Wiping of floor" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description"></textarea>
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select id="status">
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button>Add Task</button>
        </form>
      </section>
      
      <TasksList tasks={tasks} />
    </main>
  )
}

export default App
