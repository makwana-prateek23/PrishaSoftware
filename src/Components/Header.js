import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Components/Assets/logo.png";
// Import your CSS file

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`min-h-20 flex mx-24 items-center ${
          isScrolled ? "bg-blue" : "bg-transparent"
        }`}
      >
        <nav className=" flex justify-between px-16 items-center w-full">
          <div className=" logo items-center py-14">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <ul className="flex mx-4 font-semibold items-center">
              <li
                className={`relative mx-4 ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/" style={{ color: "var(--primary-color)" }}>
                  Home
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-4 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link to="/about" style={{ color: "var(--primary-color)" }}>
                  About-US
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-4 ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link to="/contact" style={{ color: "var(--primary-color)" }}>
                  Contact-US
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-4 ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link to="/services" style={{ color: "var(--primary-color)" }}>
                  Services
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-4 ${
                  location.pathname === "/team" ? "active" : ""
                }`}
              >
                <Link to="/team" style={{ color: "var(--primary-color)" }}>
                  Team
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
