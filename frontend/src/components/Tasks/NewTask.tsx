import useHttp from "../../hooks/use-http"
import type { Task } from "../../types/tasks"
import styles from "./NewTask.module.css"
import TaskForm from "./TaskForm"

interface NewTaskProps {
  onAddTask: (task: Task) => void
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp<Task>()

    const addTaskHandler = (taskData: Omit<Task, "id">) => {
        sendTaskRequest(
            {
                url: "http://localhost:8000/api/v1/tasks",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(taskData),
            },
            onAddTask
        )
    }
    
    return (
        <aside className={styles["new-task-container"]}>
            <TaskForm onSubmit={addTaskHandler} isLoading={isLoading} error={error} />
        </aside>
    )
}

export default NewTask