import { useState } from "react";
import viteLogo from "/vite.svg";
import tasksArray from "../src/assets/tasks.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(tasksArray);
  const currentTask = tasksArray.slice(0, 4);
  const completeTask = tasksArray.slice(4);

  return (
    <>
      {/* prova */}
      <header>
        <h1>Task Manager</h1>
      </header>

      <section>
        <h3>Current Task {currentTask.length}</h3>
        <div>
          <div>
            {currentTask.map((task) => (
              <div key={task.id}>
                <div>
                  <div>{task.title} </div>
                  <div>Priority: {task.priority} </div>
                  <div>Estimated Time: {task.estimatedTime} </div>
                </div>
                <button>{task.state}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3> Completed Task {completeTask.length}</h3>
        <div>
          <div>
            {completeTask.map((task) => (
              <div key={task.id}>
                <div>
                  <div>{task.title} </div>
                  <div>Priority: {task.priority} </div>
                  <div>Estimated Time: {task.estimatedTime} </div>
                </div>
                <button>{task.state}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
