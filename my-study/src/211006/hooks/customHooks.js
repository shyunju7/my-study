import { useState } from "react";

export const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = false;

    if (typeof validator === "function") {
      willUpdate = validator(value);

      console.log(`isValidated:`, willUpdate);
    }

    if (willUpdate) {
      setValue(value);
    }

    setValue(value);
  };
  return { value, onChange };
};

export const useTabs = (initTabIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTabIndex);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
