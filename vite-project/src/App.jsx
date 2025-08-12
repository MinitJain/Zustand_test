import { useState } from "react";
import "./App.css";
import Counter from "./Zustand/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Counter App</h1>
      <Counter />
    </>
  );
}

export default App;
