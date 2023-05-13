import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

interface Props {
  increment: number;
}

const CookieCounter: React.FC<Props> = ({ increment }) => {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(increment);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPreviousCount(count);
      setCount(count + increment);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <h1>
        <CountUp start={previousCount} end={count} duration={0.5} />
      </h1>
    </div>
  );
};

export default CookieCounter;
