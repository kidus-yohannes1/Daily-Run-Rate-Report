import { useState } from "react";
import Assignment from "./pages/assignment";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Assignment />
    </>
  );
}

export default App;
