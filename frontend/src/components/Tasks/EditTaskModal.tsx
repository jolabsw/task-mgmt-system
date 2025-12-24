import { useState } from "react"
import Modal from "../UI/Modal"
import TaskForm from "./TaskForm"
import type { Task } from "../../types/tasks"
import useHttp from "../../hooks/use-http"

interface EditTaskModalProps {
    task: Task
    onUpdateTask: (updatedTask: Task) => void
}

const EditTaskModal = ({ task, onUpdateTask }: EditTaskModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp<Task>()

    const openHandler = () => setIsOpen(true)
    const closeHandler = () => setIsOpen(false)

    const editHandler = (taskData: Omit<Task, "id">) => {
        sendTaskRequest(
            {
                url: `http://localhost:8000/api/v1/tasks/${task.id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskData),
            },
            onUpdateTask
        )
        closeHandler()
    }

    return (
        <>
            <button className="btn btn-secondary" onClick={openHandler}>Edit</button>

            <Modal isOpen={isOpen} onClose={closeHandler} title="Edit Task">
                {error && <p className="error">{error}</p>}
                <TaskForm
                    task={task}
                    isEditing={true}
                    onSubmit={editHandler}
                    isLoading={isLoading}
                    error={error}
                />
            </Modal>
        </>
    )
}

export default EditTaskModal
