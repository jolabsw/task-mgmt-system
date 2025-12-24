import { useEffect, useState } from "react"
import useHttp from "./hooks/use-http"
import type { Tasks } from "./types/tasks"

import Header from "./components/Header/Header"
import AddTask from "./components/Tasks/AddTask"
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
    <>
      <Header />
      <main>
        <AddTask />
        <TasksList
          tasks={tasks}
          isLoading={isLoading}
          error={error} 
        />
      </main>
    </>
  )
}

export default App
