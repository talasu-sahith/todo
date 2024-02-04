import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Tictac1 = () => {
  const [symbol, setSymbol] = useState(new Array(9).fill(null));
  const [check, setCheck] = useState(true);
  const [status, setStatus] = useState("Start Game : Player 1");

  function handlecheck(no) {
    setCheck(!check);
    check === true
      ? symbol.map(() => (symbol[no] = "X")) //setSymbol([...symbol, (symbol[no] = "X")])
      : symbol.map(() => (symbol[no] = "O"));

    if (
      (symbol[0] === symbol[1] && symbol[0] === symbol[2]) ||
      (symbol[3] === symbol[4] && symbol[3] === symbol[5]) ||
      (symbol[6] === symbol[7] && symbol[6] === symbol[8]) ||
      (symbol[0] === symbol[3] && symbol[0] === symbol[6]) ||
      (symbol[1] === symbol[4] && symbol[1] === symbol[7]) ||
      (symbol[2] === symbol[5] && symbol[2] === symbol[8]) ||
      (symbol[0] === symbol[5] && symbol[0] === symbol[8]) ||
      (symbol[2] === symbol[4] && symbol[2] === symbol[6])
    ) {
      check ? setStatus("Player 2 is winner") : setStatus("Player 1 is winner");
    } else {
      check
        ? setStatus("Next Player is Player 1")
        : setStatus("Next Player is Player 2");
    }
    console.log(symbol[0] === symbol[1]);
  }
  console.log(symbol);
  return (
    <div>
      <h1>{status}</h1>
      <div>
        <Button border="1px" onClick={() => handlecheck(0)}>
          {symbol[0]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(1)}>
          {symbol[1]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(2)}>
          {symbol[2]}
        </Button>
      </div>
      <div>
        <Button border="1px" onClick={() => handlecheck(3)}>
          {symbol[3]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(4)}>
          {symbol[4]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(5)}>
          {symbol[5]}
        </Button>
      </div>
      <div>
        <Button border="1px" onClick={() => handlecheck(6)}>
          {symbol[6]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(7)}>
          {symbol[7]}
        </Button>
        <Button border="1px" onClick={() => handlecheck(8)}>
          {symbol[8]}
        </Button>
      </div>
    </div>
  );
};
export default Tictac1;
