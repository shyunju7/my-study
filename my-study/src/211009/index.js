import { React, useEffect, useState } from "react";
import {
  useBeforeLeave,
  useClick,
  useConfirm,
  useFadeIn,
  useFullScreen,
  usePreventLeave,
  useScroll,
  useTitle,
} from "./hooks/customHooks";

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

  const checkedDialog = () => console.log("Okay!");
  const confirmContent = useConfirm("내용을 확인하셨나요?", checkedDialog);
  const { enablePrevent, disablePrevent } = usePreventLeave();

  const isLeavedPage = () => {
    console.log("Leaving page...");
  };
  useBeforeLeave(isLeavedPage);

  // 1초 후에 2초동안 실행된다.
  const fadeInH1 = useFadeIn(1, 2);

  const y = useScroll();

  const { element, triggerScreen } = useFullScreen();

  const [isFull, setIsFull] = useState(false);

  return (
    <div style={{ height: "1000vh" }}>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>button</button>

      <h1>useTitle</h1>
      <button onClick={() => titleUpdater("Main")}>updateTitle</button>

      <h1 ref={ref}>useClick</h1>

      <h1>useConfirm</h1>
      <button onClick={confirmContent}>확인하기</button>

      <h1>usePreventLeave</h1>
      <button onClick={enablePrevent}>beforeunload 등록</button>
      <button onClick={disablePrevent}>beforeunload 취소</button>

      <h1>useBeforeLeave</h1>

      <h1 {...fadeInH1}>useFadeIn</h1>

      <h1 style={{ color: y < 100 ? "red" : "green" }}>useScroll</h1>

      <h1>useFullScreen</h1>

      <div ref={element}>
        <img
          alt="my-image"
          src="https://media.vlpt.us/images/shyunju7/profile/81789180-a833-424a-bfd1-e1261f954d58/KakaoTalk_20210428_093911796.jpg?w=240"
        />

        <button
          onClick={() => {
            triggerScreen(isFull);
            setIsFull(!isFull);
          }}
        >
          {isFull ? "Exit FullScreen" : "Set FullScreen"}
        </button>
      </div>
    </div>
  );
};

export default HooksStudy;
