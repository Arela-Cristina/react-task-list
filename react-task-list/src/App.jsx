import { useState } from "react";
import viteLogo from "/vite.svg";
import tasksArray from "../src/assets/tasks.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(tasksArray);
  const completedTask = tasksArray.filter((task) => task.state === "completed");
  const pendientTask = tasksArray.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

  return (
    <>
      {/* prova */}
      <header>
        <h1>Task Manager</h1>
      </header>

      <section>
        <h3> Pendient Task {pendientTask.length}</h3>
        <div>
          <div>
            {pendientTask.map((task) => (
              <div className="mainTaskContainer" key={task.id}>
                <div className="taskContainer">
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
        <h3>Competed Task {completedTask.length}</h3>
        <div>
          <div>
            {completedTask.map((task) => (
              <div className="mainTaskContainer" key={task.id}>
                <div className="taskContainer">
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
