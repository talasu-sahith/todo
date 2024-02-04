import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, [1000]);
  //   }, [count]);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <label>{count}</label>
    </div>
  );
};
export default Stopwatch;
