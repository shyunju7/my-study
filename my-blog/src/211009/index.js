import { React, useEffect } from "react";

const HooksStudy = () => {
  const sayHello = () => {
    console.log(`hello!`);
  };

  useEffect(sayHello);

  return (
    <div>
      <h1>hooksStudy!</h1>
      <button onClick={() => console.log(`clicked!`)}>button</button>
    </div>
  );
};

export default HooksStudy;
