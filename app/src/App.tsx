import { useState } from "react";
import "./App.css";
import { Button } from "kit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>
        <Button></Button>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
