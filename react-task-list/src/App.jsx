import { useState } from "react";
import viteLogo from "/vite.svg";
import  tasksArray  from "../src/assets/tasks.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(tasksArray);

  return (
    <>
      {/* prova */}
      <h1>prova</h1>
    </>
  );
}

export default App;
