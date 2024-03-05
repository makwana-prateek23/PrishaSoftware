import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
// Import your CSS file for styling

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({ duration: 300 });
    AOS.refresh();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`back-to-top-btn ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
        title="Back to Top"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "var(--text-color)" }}
        />
      </button>
    </div>
  );
};

export default BackToTopButton;
