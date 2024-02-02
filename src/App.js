import { Input } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import UseRef2 from "./components/UseRef2";
import Counter from "./components/Counter";
import { Button, ButtonGroup } from "@chakra-ui/react";

const App = () => {
  // const inputRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const [names, setNames] = useState([]);

  // function handleClick() {
  //   console.log(inputRef.current.value);
  //   setNames([...names, inputRef.current.value]);
  //   inputRef.current.value = "";
  // }

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  // console.log(names);

  return (
    <div>
      {/* <input ref={inputRef} type="text" id="message" name="message" />
      <button onClick={handleClick}>Log message</button> */}
      {/* <UseRef2 /> */}
      <Counter />
    </div>
  );
};

export default App;
