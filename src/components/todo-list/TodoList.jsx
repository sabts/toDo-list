import { useState } from "react";
import { v4 } from "uuid";
import TASKS_LIST from "../../constants/tasklist";
import styles from "./todolist.module.css";
import CreatedTask from "../createdtask/CreatedTask";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    <>
      <div>
        <h1>TODO</h1>
        <img src="/assets/icon-moon.svg" />
      </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          createTask(task, toDos, setToDos);
          setTask("");
        }}
        className="form"
      >
        <label htmlFor="inputtext" className={styles["label-task"]}></label>
        <input
          type="text"
          placeholder="Create a new todo..."
          id="inputtext"
          value={task}
          onChange={e => setTask(e.target.value)}
          className={styles["input-task"]}
        />
      </form>

      {/* Render tasks */}
      <div>
        {toDos.map(task => (
          <CreatedTask
            key={task.id}
            task={task}  // Pasamos solo un task
            toDos={toDos}  // Pasamos el array completo
            setToDos={setToDos}  // Pasamos la función para actualizar el estado
          />
        ))}
      </div>

      <div>
        <span>1 item left</span>
        <span>Clear Complete</span>
      </div>

      <div>
        <button>All</button>
        <button>Active</button>
        <button>completed</button>
      </div>
    </>
  );
};

// Creación de tarea
const createTask = (task, toDos, setToDos) => {
  if (task === "") return;

  const newTask = {
    id: v4(),
    name: task,
    completed: false,
  };

  console.log("Nuevo ID:", newTask.id);

  const newToDos = [...toDos, newTask];
  setToDos(newToDos);
};

export default TodoList;