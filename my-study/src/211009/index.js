import { React, useEffect, useState } from "react";
import { useClick, useTitle } from "./hooks/customHooks";

const HooksStudy = () => {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    console.log(`hello!`);
  };

  useEffect(() => {
    sayHello();
  }, [count]);

  const titleUpdater = useTitle("Loading...");

  const onClick = () => {
    console.log("눌림!");
  };
  const ref = useClick(onClick);

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>button</button>

      <h1>useTitle</h1>
      <button onClick={() => titleUpdater("Main")}>updateTitle</button>

      <h1 ref={ref}>useClick</h1>
    </div>
  );
};

export default HooksStudy;
