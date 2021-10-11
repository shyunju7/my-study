import { React, useEffect, useState } from "react";
import { useTitle } from "./hooks/customHooks";

const HooksStudy = () => {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    console.log(`hello!`);
  };

  useEffect(() => {
    sayHello();
  }, [count]);

  const titleUpdater = useTitle("Loading...");

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>button</button>

      <h1>useTitle</h1>
      <button onClick={() => titleUpdater("Main")}>updateTitle</button>
    </div>
  );
};

export default HooksStudy;
