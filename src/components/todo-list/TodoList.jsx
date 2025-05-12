import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [completeTask, setCompleteTask] = useState(false);
  return (
    <>
      <div>
        <h1>TODO</h1>
        <img src="/assets/icon-moon.svg" />
      </div>
      <form>
        <label htmlFor="inputtext"></label>
        <input
          type="text"
          placeholder="Create a new todo..."
          id="inputtext"
          value="{task}"
        />
      </form>

      <div>
        <input
          type="checkbox"
          id="task"
          onChange={() => setCompleteTask(!completeTask)}
        />
        <label htmlFor="task">Make a todo app</label>
        <img src="/assets/icon-cross.svg" />
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
export default TodoList;
