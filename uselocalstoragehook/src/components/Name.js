import useLocalStorage from "../hooks/useLocalStorage";
import { useRef } from "react";
export default function Name() {
  const [name, setName] = useLocalStorage("name", "");
  const nameRef = useRef();
  function clickHandler() {
    setName(nameRef.current.value);
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRef} />
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
