import { useEffect, useState } from "react"
import useHttp from "./hooks/use-http"
import type { Task } from "./types/tasks"

import Header from "./components/Header/Header"
import NewTask from "./components/Tasks/NewTask"
import TasksList from "./components/Tasks/TaskList"

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const { isLoading, error, sendRequest: fetchTasks } = useHttp<Task[]>()

  useEffect(() => {
    const assignTasks = (taskData: Task[]) => {
      setTasks(taskData)
    }

    fetchTasks({
      url: "http://localhost:8000/api/v1/tasks"
    }, assignTasks)
  }, [])

  const handleAddTask = (task: any) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  return (
    <>
      <Header />
      <main>
        <NewTask onAddTask={handleAddTask} />
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
