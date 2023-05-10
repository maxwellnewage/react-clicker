import React, { useState } from "react";
import cookieImage from "../images/cookie.png";
import "./cookie.css";

function Cookie() {
  const [cookieAmount, setCookieAmount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const incrementCookie = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCookieAmount(cookieAmount + 1);

      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }
  };

  return (
    <div className="text-center">
      <h1>{cookieAmount} galletas</h1>
      <img
        className={`cookie-img ${isAnimating ? "cookie-img--animated" : ""}`}
        width="450"
        src={cookieImage}
        onClick={incrementCookie}
      />
    </div>
  );
}

export default Cookie;