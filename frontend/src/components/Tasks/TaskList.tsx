import { useEffect, useMemo, useState } from "react"
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
    const [searchTerm, setSearchTerm] = useState("")
    const [debouncedTerm, setDebouncedTerm] = useState("")

    // Update debouncedTerm after user stops
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, 400)

        return () => clearTimeout(handler) // clear timeout if typing continues
    }, [searchTerm])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    // Filter tasks based on debounced search term
    const filteredTasks = useMemo(() => {
        if (!debouncedTerm.trim()) return tasks // empty search returns all

        const term = debouncedTerm.trim().toLowerCase()

        return tasks.filter((task) => {
            const title = task.title?.toLowerCase().trim() || ""
            const description = task.description?.toLowerCase().trim() || ""
            const status = task.status?.toLowerCase().trim() || ""

            return title.includes(term) || description.includes(term) || status.includes(term);
        });
    }, [tasks, debouncedTerm]);

    let taskList = <h2>No tasks at the moment. Start adding some tasks!</h2>

    if (filteredTasks.length > 0) {
        taskList = (
            <article>
                {filteredTasks.map(task => (
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
    } else {
        taskList = <h2>No tasks at the moment. Start adding some tasks!</h2>
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
            <div className={styles["task-list-top"]}>
                <h2>Task List</h2>
                <input
                    id="search"
                    type="text"
                    placeholder="Search tasks here..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            {content}
        </section>
    )
}

export default TasksList