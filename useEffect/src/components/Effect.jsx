import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect called ${value}`);
    console.log(`useEffect called ${count}`);
  }, [count, value]);

  const valuchng = () => {
    setCount(count + 1);
  };

  const handleValue = () => {
    setValue(value - 1);
  };

  return (
    <>
      <div>
        Hello use effect {value} and {count}
      </div>

      <button onClick={valuchng}>Add value</button>
      <button onClick={handleValue}>Delete value</button>
    </>
  );
}

export default App;
