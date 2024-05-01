import React, { useState, useEffect } from "react";
import logo from "../Asseat/images/Global (1).png";
import '../Asseat/Css/banner.css'
import Theam from "./Theam";
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
      <Theam/>
      <img
        src={logo}
        alt="logo"
        className="user-select-none w-20 aspect-square animate-bounce animate:scale-75 duration-300"
      />
      <h1 className={`text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600  via-amber-500  via-30% to-black text-center font-bold mt-2 transition-all duration-1000 ease-in-out font1  ${animationTitle.length === title.length ? "animate-pulse" : ""}`}>
        {animationTitle.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
};

export default Banner;
