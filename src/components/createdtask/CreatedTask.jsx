import styles from "./createtask.module.css"

const CreatedTask = ({ task, toDos, setToDos, completeTask, deleteTask }) =>
    {return  <div className={styles["task-container"]}>
            <input
              type="checkbox"
              id={`task-${task.id}`} 
              onChange={() => completeTask(task.id, toDos, setToDos)} 
              className={styles["task-check"]}/>
            <label htmlFor={`task-${task.id}`} 
            className={styles["task-text"]}>{task.name}</label>
            <img 
               onClick={() => deleteTask(task.id, toDos, setToDos)} 
            src="/assets/icon-cross.svg" />
          </div>
}
export default CreatedTask