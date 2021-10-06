import { React, useState } from "react";

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setValue(value);
  };
  return { value, onChange };
};

export const useTabs = () => {};
