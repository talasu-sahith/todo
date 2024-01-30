import { Input } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [names, setNames] = useState([]);

  function handleClick() {
    console.log(inputRef.current.value);
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = "";
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  console.log(names);

  return (
    <div>
      <input ref={inputRef} type="text" id="message" name="message" />
      <button onClick={handleClick}>Log message</button>
    </div>
  );
};

export default App;
