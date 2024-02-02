import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleIncrement() {
    setCount(count + 1);
    countRef.current++;

    console.log(count);
    console.log(countRef.current);
  }

  return (
    <div>
      "count :" {countRef.current.value}
      <Button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </Button>
    </div>
  );
};
export default UseRef2;
