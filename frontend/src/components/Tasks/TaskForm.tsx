import type { Task } from "../../types/tasks"
import styles from "./TaskForm.module.css"

interface TaskFormProps {
    task?: Task // to be used for editing
    isEditing?: boolean
    onSubmit: (taskData: Omit<Task, "id">) => void
    isLoading?: boolean
    error?: string | null
}

const TaskForm = ({ task, isEditing, onSubmit, isLoading, error }: TaskFormProps) => {
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(event.currentTarget)

        const taskData = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            status: formData.get("status") as "pending" | "in progress" | "completed",
        }

        onSubmit(taskData)
        form.reset()
    }

    return (
        <form onSubmit={submitHandler} className={styles["task-form"]}>
            {error && <p className={styles.error}>{error}</p>}
            <h2>{isEditing ? "" : "Add New Task"}</h2>
            <div className={styles["form-group"]}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    defaultValue={task?.title || ""}
                    required
                />
            </div>
            <div className={styles["form-group"]}>
                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    rows={5}
                    defaultValue={task?.description || ""}
                />
            </div>
            <div className={styles["form-group"]}>
                <label htmlFor="status">Status:</label>
                <select 
                    id="status"
                    name="status"
                    defaultValue={task?.status || "pending"}
                >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className={styles["form-actions"]}>
                {!isEditing && <button type="reset" className="btn btn-secondary">Reset</button>}
                <button className="btn" disabled={isLoading}>
                    {isLoading ? (isEditing ? "Saving..." : "Adding...") : 
                        isEditing ? "Save Changes" : "Add Task"}
                </button>
            </div>
        </form>
    )
}

export default TaskForm