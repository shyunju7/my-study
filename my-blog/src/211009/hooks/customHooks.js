import { useState, useEffect } from "react";

export const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};
