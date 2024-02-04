import { useState } from "react";
import { Button } from "@chakra-ui/react";

const Cell = ({ count, handleselect }) => {
  const [count2, setCount2] = useState("");
  console.log(count);
  console.log("count2 :", count2);
  const handlechange = () => {
    handleselect();
    setCount2(count);
  };

  return (
    <Button border="1px" onClick={() => handlechange()}>
      {count2 ? "X" : "O"}
    </Button>
  );
};
export default Cell;
