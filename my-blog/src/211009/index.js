import { React, useEffect, useState } from "react";

const HooksStudy = () => {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    console.log(`hello!`);
  };

  useEffect(() => {
    sayHello();
  }, [count]);

  return (
    <div>
      <h1>hooksStudy!</h1>
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  );
};

export default HooksStudy;
