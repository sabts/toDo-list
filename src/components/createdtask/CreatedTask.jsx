import styles from "./createtask.module.css"

const CreatedTask = ({ task, completeTask, toDos, setToDos}) =>
    {return  <div className={styles["task-container"]}>
            <input
              type="checkbox"
              id="task"
              onChange={() => setCompleteTask(!completeTask)}
              className={styles["task-check"]}
              checked={task.completed}/>
            <label htmlFor="task" className={styles["task-text"]}>Make a todo app</label>
            <img src="/assets/icon-cross.svg" />
          </div>
}
export default CreatedTask