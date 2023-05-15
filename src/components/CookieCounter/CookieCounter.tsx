import React, { useContext, useEffect, useState } from "react";
import CookieContext from "../../context/CookieContext";
import useInventory from "../../hooks/useInventory";

const CookieCounter: React.FC = () => {
  const {cookieAmount, setCookieAmount} = useContext(CookieContext)
  const { inventory, getTotalGiveInventory } = useInventory();
  const [giveInventory, setGiveInventory] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCookieAmount(cookieAmount + giveInventory);
    }, 10);

    return () => clearInterval(intervalId);
  }, [cookieAmount]);

  useEffect(() => {
    setGiveInventory(getTotalGiveInventory())
  }, [inventory])

  return (
    <div>
      <h1>
        {Math.floor(cookieAmount)} galletas
      </h1>
    </div>
  );
};

export default CookieCounter;
