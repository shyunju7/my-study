import { React, useState } from "react";
import { useInput, useTabs } from "./hooks/customHooks";
const HooksStudy = () => {
  const [count, setCount] = useState(0);

  const checkEmail = (value) => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (value.match(regExp)) return true;
    else return false;
  };

  const email = useInput("wooden@woo.co.kr", checkEmail);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const allTabs = [
    {
      tab: "우든",
      contents: "안녕하세요! 우든입니다.",
    },
    {
      tab: "수봉",
      contents: "안녕하세요! 수봉입니다.",
    },
  ];

  const { currentItem, changeItem } = useTabs(0, allTabs);

  return (
    <div>
      <h1>Current Count {count}</h1>
      <button onClick={incrementCount}> up </button>
      <button onClick={decrementCount}> down </button>

      <h1> useInput</h1>
      <input placeholder="name" {...email} />

      <h1>useTabs</h1>
      <button onClick={() => changeItem(0)}>우든</button>
      <button onClick={() => changeItem(1)}>수봉</button>
      <p>{currentItem.contents}</p>
    </div>
  );
};

export default HooksStudy;
