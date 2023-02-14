import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-slate-100 w-screen h-screen">
      <h1>hello world!</h1>
    </div>
  );
}

export default App;
