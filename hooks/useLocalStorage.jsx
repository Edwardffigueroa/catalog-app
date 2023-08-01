import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue;
  };

  const [value, setValue] = useState(() => getInitialValue());

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const setValueAndStore = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValueFromStorage = () => {
    setValue(undefined);
    window.localStorage.removeItem(key);
  };

  return [value, setValueAndStore, removeValueFromStorage];
};

export default useLocalStorage;
