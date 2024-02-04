// import { Container } from '@chakra-ui/react'

// import { border } from "@chakra-ui/react";
import { useState } from "react";
import Cell from "./Cell";

const Tictactoe = () => {
  const [count, setCount] = useState(true);

  const handleselect = () => {
    setCount(!count);
  };

  return (
    <div>
      <div>
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
      </div>
      <div>
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
      </div>
      <div>
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
        <Cell count={count} handleselect={handleselect} />
      </div>
    </div>
  );
};

export default Tictactoe;
