import { useState } from "react";
import viteLogo from "/vite.svg";
import tasksArray from "../src/assets/tasks.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(tasksArray);
  const currentTask = tasksArray.slice(0, 3);
  const completeTask = tasksArray.slice(3);

  return (
    <>
      {/* prova */}
      <header>
        <h1>Task Manager</h1>
      </header>

      <section>
        <h3>Current Task 4</h3>
        <div>
          <div>
            {tasksArray.map((task) => (
              <div key={task.id}>
                <div>{task.title} </div>
                <div>Priority: {task.priority} </div>
                <div>Estimated Time: {task.estimatedTime} </div>
              </div>
            ))}
          </div>
          <div>{/* boton */}</div>
        </div>
      </section>
    </>
  );
}

export default App;
