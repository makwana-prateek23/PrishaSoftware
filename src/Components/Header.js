import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Components/Assets/logo.png";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close mobile menu when window size changes to LG screen
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  return (
    <div>
      <header
        className={`min-h-20 flex items-center justify-between  header ${
          scrolled
            ? "bg-white shadow-md fixed top-0 left-0 w-full z-50 scrolled"
            : "min-h-20 flex items-center"
        }`}
      >
        <div className="logo items-center flex mx-8">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {/* Normal menu for LG screens */}
        <nav className={`hidden lg:flex px-16 justify-end items-center w-full`}>
          <div>
            <ul className="flex mx-6 justify-center text-lg font-semibold items-center">
              {/* Normal menu items */}
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
        {/* Hamburger menu icon for small and medium screens */}
        {window.innerWidth <= 768 && (
          <div className="block md:hidden">
            <button className="menu-icon mx-4" onClick={toggleMenu}>
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {window.innerWidth <= 768 && (
        <div
          className={`fixed inset-x-0 top-20 bg-gray-100 p-4 z-50 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center  ">
            {/* Mobile menu items */}
            <li
              className={`relative my-4  w-3/12  ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" style={{ color: "var(--primary-color)" }}>
                Home
                <span className="line" />
              </Link>
            </li>
            <li
              className={`relative my-4 w-3/12 ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about" style={{ color: "var(--primary-color)" }}>
                About-US
                <span className="line" />
              </Link>
            </li>
            <li
              className={`relative my-4 w-3/12 ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              <Link to="/services" style={{ color: "var(--primary-color)" }}>
                Services
                <span className="line" />
              </Link>
            </li>
            <li
              className={`relative my-4 w-3/12 ${
                location.pathname === "/team" ? "active" : ""
              }`}
            >
              <Link to="/blog" style={{ color: "var(--primary-color)" }}>
                Blog
                <span className="line" />
              </Link>
            </li>
            <li
              className={`relative my-4 w-3/12 ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" style={{ color: "var(--primary-color)" }}>
                Contact-US
                <span className="line" />
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-white hover:text-white focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
