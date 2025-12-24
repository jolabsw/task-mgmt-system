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

  const addTaskHandler = (task: any) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  const updateTaskHandler = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      // Check for current tasks and place it on top
      const remainingTasks = prevTasks.filter((task) => task.id !== updatedTask.id);
      return [updatedTask, ...remainingTasks];
    })
  }

  const deleteTaskHandler = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <Header />
      <main>
        <NewTask onAddTask={addTaskHandler} />
        <TasksList
          tasks={tasks}
          isLoading={isLoading}
          error={error}
          onUpdateTask={updateTaskHandler}
          onDeleteTask={deleteTaskHandler}
        />
      </main>
    </>
  )
}

export default App
