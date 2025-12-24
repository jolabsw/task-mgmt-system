import useHttp from "../../hooks/use-http"
import type { Task } from "../../types/tasks"
import styles from "./AddTask.module.css"

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp<Task>()

    const addTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget)

        const taskData = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            status: formData.get("status") as string,
        }

        const createTask = (createdTask: Task) => {
            onAddTask(createdTask);
            form.reset();
        }

        sendTaskRequest(
        {
            url: "http://localhost:8000/api/v1/tasks",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        }, createTask)
    }
    
    return (
        <aside className={styles["task-form"]}>
            <h2>Add New Task</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={addTaskHandler}>
                <div className={styles["form-group"]}>
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Wiping of floor" />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows={5}></textarea>
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status">
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className={styles["form-actions"]}>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    <button className="btn" disabled={isLoading}>
                        {isLoading ? "Adding..." : "Add Task"}
                    </button>
                </div>
            </form>
        </aside>
    )
}

export default NewTask