import React, { useState, useEffect } from "react";
import logo from "../Asseat/images/Global (1).png";
const Banner = () => {
  const [animationTitle, setAnimationTitle] = useState([]);
  const title = "Replay Global";
  useEffect(() => {
    const interval = setInterval(() => {
      if (animationTitle.length < title.length) {
        setAnimationTitle((prevTitle) => [
          ...prevTitle,
          title[animationTitle.length],
        ]);
      } else {
        clearInterval(interval);
      }
    }, 5000 / title.length);

    return () => clearInterval(interval);
  }, [animationTitle, title]);

  return (
    <div className="fixed top-0 left-0 flex justify-center flex-col items-center h-screen w-screen z-50 bg-white">
      <img
        src={logo}
        alt="logo"
        className="user-select-none w-20 aspect-square animate-pulse"
      />
      <h1 className={`text-xl text-gray-500 font-bold  transition-all duration-1000 ease-in-out ${animationTitle.length == title.length ? "animate-ping" : ""}`}>
        {animationTitle.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
};

export default Banner;
