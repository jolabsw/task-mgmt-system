import type { Task } from "../../types/tasks"
import DeleteTaskModal from "./DeleteTaskModal"
import EditTaskModal from "./EditTaskModal"

import styles from "./TaskList.module.css"

interface TasksProps {
    tasks: Task[]
    isLoading: boolean
    error: string | null,
    onUpdateTask: (updatedTask: Task) => void
    onDeleteTask: (deletedTask: number) => void
}

const TasksList = ({ tasks, isLoading, error, onUpdateTask, onDeleteTask }: TasksProps) => {
    let taskList = <h2>No tasks at the moment. Start adding some tasks!</h2>

    if (tasks.length > 0) {
        taskList = (
            <article>
                {tasks.map(task => (
                    <div key={task.id} className={styles["task-list-item"]}>
                        <h3>
                            <span>{task.status}</span>
                            {task.title}
                        </h3>
                        <p>{task.description}</p>
                        <div className={styles["task-list-actions"]}>
                            <EditTaskModal task={task} onUpdateTask={onUpdateTask} />
                            <DeleteTaskModal task={task} onDeleteTask={onDeleteTask} />
                        </div>
                    </div>
                )
                )}
            </article>
        )
    }

    let content = taskList

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>"Loading tasks..."</p>
    }

    return (
        <section className={styles["task-list"]}>
            <h2>Task List</h2>
            {content}
        </section>
    )
}

export default TasksList