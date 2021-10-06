import { React, useState } from "react";
import { useInput } from "./hooks/customHooks";
const HooksStudy = () => {
  const [count, setCount] = useState(0);
  const name = useInput("우든");

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Current Count {count}</h1>
      <button onClick={incrementCount}> up </button>
      <button onClick={decrementCount}> down </button>

      <h1> useInput</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default HooksStudy;
