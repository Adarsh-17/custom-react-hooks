import { useEffect, useState } from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    if (localStorage.getItem(key)) {
      currentValue = JSON.parse(localStorage.getItem(key, initialValue));
    } else {
      currentValue = initialValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
