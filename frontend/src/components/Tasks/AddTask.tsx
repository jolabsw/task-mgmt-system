import styles from "./AddTask.module.css"

const AddTask = () => {
    return (
        <aside className={styles["task-form"]}>
            <h2>Add New Task</h2>
            <form>
                <div className={styles["form-group"]}>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" placeholder="Wiping of floor" />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" rows={5}></textarea>
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="status">Status:</label>
                    <select id="status">
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className={styles["form-actions"]}>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    <button className="btn">Add Task</button>
                </div>
            </form>
        </aside>
    )
}

export default AddTask