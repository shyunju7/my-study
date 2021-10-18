import { useState, useEffect, useRef } from "react";

/** useTitle **/
export const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

/** useClick **/
export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  // hooks는 문서의 최상단 어떠한 값이 return되기 전에 정의되어야 함으로 아래 조건문이 최상단으로 올라가면 오류 발생함
  if (typeof onClick !== "function") return;

  return element;
};

/** useConfirm **/
export const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };

  return confirmAction;
};

/** usePreventLeave **/
export const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; // beforeunload는 return이 팔요하다.
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

/** useBeforeLeave **/
export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const handleLeave = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };

  if (typeof onBefore !== "function") return;
};

/** useFadeIn **/
export const useFadeIn = (duration, delay) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

/** useScroll **/
export const useScroll = () => {
  const [scrollY, setScrollY] = useState({
    scrollY: 0,
  });

  const onScroll = () => {
    console.log(`scrollY : ${window.scrollY}`);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
};
