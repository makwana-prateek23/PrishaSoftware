import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Components/Assets/logo.png";
// Import your CSS file

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Get the current location
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <header
        className={`min-h-20 flex  items-center header  ${
          scrolled
            ? "bg-white shadow-md fixed top-0 left-0 w-full z-50 scrolled"
            : "min-h-20 flex  items-center "
        }`}
      >
        <div className=" logo items-center  flex mx-8">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className=" flex  px-16 justify-end items-center w-full">
          <div>
            <ul className="flex mx-6 justify-center text-lg font-semibold items-center">
              <li
                className={`relative mx-8 ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/" style={{ color: "var(--primary-color)" }}>
                  Home
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-8 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link to="/about" style={{ color: "var(--primary-color)" }}>
                  About-US
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-8 ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link to="/services" style={{ color: "var(--primary-color)" }}>
                  Services
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-8 ${
                  location.pathname === "/team" ? "active" : ""
                }`}
              >
                <Link to="/blog" style={{ color: "var(--primary-color)" }}>
                  Blog
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-8 ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link to="/contact" style={{ color: "var(--primary-color)" }}>
                  Contact-US
                  <span className="line" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
