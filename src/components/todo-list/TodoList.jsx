import { useState } from "react";
import { v4 } from "uuid";
import {TASKS_LIST} from "../../constants/tasklist";
import styles from "./todolist.module.css";
import CreatedTask from "../createdtask/CreatedTask";
import Button from "../button/Button";

const TodoList = () => {
  const [task, setTask] = useState(""); //el individual 
  const [toDos, setToDos] = useState(TASKS_LIST); //el grupo
  const [filter, setFilter] = useState("all")

  const filteredTasks = getFilteredTasks(filter, toDos);

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header-content"]}>
        <h1>TODO</h1>
        <img src="/assets/icon-moon.svg" />
        </div>
      </div>
      <main className={styles["main"]}>
      <form
        onSubmit={event => {
          event.preventDefault();
          createTask(task, toDos, setToDos, setTask);
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
      <div>
        {filteredTasks.map(task => (
          <CreatedTask
            key={task.id}
            task={task}
            toDos={toDos}  
            setToDos={setToDos}  
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <div className={styles["tasks-footer"]}>
        <span>{countItemsLeft(toDos)} item left</span>
        <span onClick={() => clearCompletedTasks(toDos, setToDos)}>Clear Complete</span>
      </div>
      <div className={styles["filters"]}>
      <Button action={() => setFilter("all")} isActive={filter === "all"}>All</Button>
      <Button action={() => setFilter("active")} isActive={filter === "active"}>Active</Button>
      <Button action={() => setFilter("completed")} isActive={filter === "completed"}>Completed</Button>>
      </div>
      </main>
    </>
  );
};

// Creación de tarea
const createTask = (task, toDos, setToDos, setTask) => {
  if (task === "") return;

  const newTask = {
    id: v4(),
    name: task,
    completed: false,
  };

  console.log("Nuevo ID:", newTask.id);

  const newToDos = [...toDos, newTask];
  setToDos(newToDos);
  setTask("")
};

const countItemsLeft = (toDos) => {
  return toDos.filter(task => !task.completed).length;
};

const clearCompletedTasks = (toDos, setToDos) => {
  const activeTasks = toDos.filter(task => !task.completed);
  setToDos(activeTasks);
};

const completeTask = (id, toDos, setToDos) => {
  const updatedTasks = toDos.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setToDos(updatedTasks);
};

const deleteTask = (id, toDos, setToDos) => {
  const updatedTasks = toDos.filter(task => task.id !== id);
  setToDos(updatedTasks);
};

const filterActive = (toDos) => {
  return toDos.filter(task => !task.completed);
};

const filterCompleted = (toDos) => {
  return toDos.filter(task => task.completed);
};

const filterAll = (toDos) => {
  return toDos;
};

const getFilteredTasks = (filter, toDos) => {
  if (filter === "active") return filterActive(toDos);
  if (filter === "completed") return filterCompleted(toDos);
  return toDos;
};
export default TodoList