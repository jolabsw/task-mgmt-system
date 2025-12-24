import { useState } from "react"
import Modal from "../UI/Modal"
import useHttp from "../../hooks/use-http"
import type { Task } from "../../types/tasks"

interface DeleteTaskModalProps {
    task: Task
    onDeleteTask: (taskId: number) => void
}

const DeleteTaskModal = ({ task, onDeleteTask }: DeleteTaskModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { isLoading, error, sendRequest: sendDeleteRequest } = useHttp<void>()

    const openHandler = () => setIsOpen(true)
    const closeHandler = () => setIsOpen(false)

    const confirmDeleteHandler = () => {
        sendDeleteRequest(
            {
                url: `http://localhost:8000/api/v1/tasks/${task.id}`,
                method: "DELETE",
            },
            () => {
                onDeleteTask(task.id)
                closeHandler()
            }
        )
    }

    return (
        <>
            <button className="btn btn-danger" onClick={openHandler}>
                Delete
            </button>

            <Modal isOpen={isOpen} onClose={closeHandler} title="Confirm Delete">
                <p>Are you sure you want to delete the task: <strong>{task.title}</strong>?</p>
                {error && <p className="error">{error}</p>}
                <div>
                    <button className="btn btn-secondary" onClick={closeHandler} disabled={isLoading}>
                        Cancel
                    </button>
                    <button className="btn btn-danger" onClick={confirmDeleteHandler} disabled={isLoading}>
                        {isLoading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default DeleteTaskModal
