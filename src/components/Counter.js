import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Counter = () => {
  const [num, setNum] = useState(0);
  handleIncrease() = () =>( setNum(num + 1));
  handleDecrease() = () =>( setNum(num - 1));

  return (
    <div>
      Counter : {num}
      <Button onClick={() => handleIncrease()}>Increase</Button>
      <Button onClick={() => handleDecrease()}>Decrease</Button>
    </div>
  );
};
export default Counter;
