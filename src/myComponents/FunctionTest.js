import { useState } from "react";

function FunctionTest() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is function based component</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : count - 0)}>
        Decrement
      </button>
    </div>
  );
}

export default FunctionTest;
