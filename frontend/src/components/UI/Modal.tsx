import type { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.css"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null

    const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) onClose()
    }

    // For Typescript making sure there is modal root
    // And avoid error on editor
    const modalRoot = document.getElementById("modal")
    if (!modalRoot) return null


    return createPortal(
        <div className={styles.backdrop} onClick={closeHandler}>
            <div className={styles.modal}>
                {title && <h2 className={styles["modal-title"]}>{title}</h2>}
                <div className={styles["modal-content"]}>{children}</div>
                <div className={styles["modal-actions"]}>
                    <button className="btn btn-secondary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal
