import React, { useState, useEffect } from "react";
// Import your CSS file for styling
import AOS from "aos";
import "aos/dist/aos.css";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when user scrolls down 20px
  const toggleVisibility = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the initial visibility when component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({ duration: 300 }); // Initialize AOS library
    AOS.refresh();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`back-to-top-btn ${isVisible ? "show" : "hide"}`}
        onClick={scrollToTop}
        title="Back to Top"
        style={{ zIndex: "9999" }}
        // Set a higher z-index
      >
        <i
          className="fas fa-arrow-up"
          style={{ color: "var(--text-color)" }}
        ></i>
      </button>
    </div>
  );
};

export default BackToTopButton;
