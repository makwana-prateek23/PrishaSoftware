import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Components/Assets/logo.png";
// Import your CSS file

function Header() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <header className="min-h-20 flex mx-24 items-center bg-transparent">
        <div className=" logo items-center  flex mx-24">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className=" flex  px-16 items-center w-full">
          <div>
            <ul className="flex mx-4 justify-evenly text-lg font-semibold items-center">
              <li
                className={`relative mx-6 ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/" style={{ color: "var(--primary-color)" }}>
                  Home
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-6 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link to="/about" style={{ color: "var(--primary-color)" }}>
                  About-US
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-6 ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link to="/services" style={{ color: "var(--primary-color)" }}>
                  Services
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-6 ${
                  location.pathname === "/team" ? "active" : ""
                }`}
              >
                <Link to="/blog" style={{ color: "var(--primary-color)" }}>
                  Blog
                  <span className="line" />
                </Link>
              </li>
              <li
                className={`relative mx-6 ${
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
