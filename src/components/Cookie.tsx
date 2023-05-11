import React, { useState, useContext } from "react";
import cookieImage from "../images/cookie.png";
import "./cookie.css";
import CookieContext from "../context/CookieContext";


const Cookie: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const {cookieAmount, setCookieAmount} = useContext(CookieContext)

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
