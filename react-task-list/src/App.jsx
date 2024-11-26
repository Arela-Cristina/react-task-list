import { useState } from "react";
import viteLogo from "/vite.svg";
import tasksArray from "../src/assets/tasks.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(tasksArray);

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
            {/* Task */}
            {/* priority */}
            {/* Est time */}
          </div>
          <div>{/* boton */}</div>
        </div>
      </section>
    </>
  );
}

export default App;
