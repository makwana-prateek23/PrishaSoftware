import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CircularProgressBar = ({ percentage, animationEffect }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress > percentage) {
          clearInterval(interval);
          return percentage;
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="Circularbar"
      data-aos={animationEffect} // Use the specified animation effect
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={3}
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "24px",
          pathColor: `rgba(1, 53, 141)`,
          textColor: " #01358d",
          trailColor: "#f9556d",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
