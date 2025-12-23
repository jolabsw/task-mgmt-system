import type { Tasks } from "../../types/tasks"

interface TasksProps {
    tasks: Tasks[]
}

const TasksList = ({ tasks }: TasksProps) => {
    return (
        <section>
            <h2>Current Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{task.status}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                )
                )}
            </ul>
        </section>
    )
}

export default TasksList