import type { ReactNode } from "react"
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

    return (
        <div className={styles.backdrop} onClick={closeHandler}>
            <div className={styles.modal}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <div className={styles.content}>{children}</div>
                <div className={styles.actions}>
                    <button className="btn btn-secondary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal
