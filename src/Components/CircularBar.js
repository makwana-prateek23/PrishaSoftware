import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CircularProgressBar = ({ percentage, animationEffect }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circularProgressBarRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const circularProgressBar = circularProgressBarRef.current;
      if (circularProgressBar) {
        const topOffset = circularProgressBar.getBoundingClientRect().top;
        const bottomOffset = circularProgressBar.getBoundingClientRect().bottom;

        // Check if the circularProgressBar is in the viewport
        if (topOffset < window.innerHeight && bottomOffset >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress > percentage) {
            clearInterval(interval);
            return percentage;
          }
          return newProgress;
        });
      }, 5);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage]);

  return (
    <div
      className="Circularbar"
      data-aos={animationEffect} // Use the specified animation effect
      ref={circularProgressBarRef}
    >
      <CircularProgressbar
        value={isVisible ? progress : 0} // Set value to progress only if isVisible is true
        text={isVisible ? `${progress}%` : "0%"} // Set text to progress only if isVisible is true
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
