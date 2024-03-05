import React from "react";
import logo from "../Components/Assets/logo.png";
import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-12" style={{ backgroundColor: "#0d2753" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 py-12 lg:px-8">
        <div className="sm:grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col w-full justify-center items-center my-2 sm:px-6 mb-8 md:px-4 ">
            <div className="box-border bg-white mb-2 text-center rounded-md p-2 footerLogo">
              <img
                src={logo}
                alt="Company Logo"
                className="sm:h-6 md:h-12 lg:h-18  w-auto"
              />
            </div>

            <p className="mb-4 px-4 sm:text-center text-balance md:text-start text-center ">
              We are providing premium quality Services and Softwares.
            </p>
            <div className="flex items-center">
              <ul className="flex px-4">
                <li className="mr-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "var(--primary-color)" }}
                      />
                    </div>
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "var(--primary-color)" }}
                      />
                    </div>
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "var(--primary-color)" }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center w-full sm:justify-center mb-6 lg:mb-0">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-3xl md:text-4xl lg:text-2xl font-semibold pb-4 ">
                Contact Info
              </h4>
            </div>
            <ul className="sm:text-center md:text-start px-4 sm:pr-6">
              <li className="sm:px-4 lg:px-0 sm:indent-2 lg:indent-0">
                <span style={{ color: "var(--text-color)" }} className="mr-2 ">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                406/A, Forth Floor, Shivalay Complex, Mavdi Chowk, Mavdi Main
                Road, Mavdi, Rajkot, Gujarat 360004
              </li>
              <li className="sm:px-4 lg:px-0 sm:indent-4 md:indent-0">
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2"
                >
                  <FontAwesomeIcon icon={faClock} />
                </span>
                Monday-Saturday : 9am-7pm
              </li>
              <li className=" sm:px-4 lg:px-0  sm:indent-4 md:indent-0">
                {" "}
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                info@Prishasoftware.com
              </li>
              <li className="sm:indent-4 sm:px-4 lg:px-0 md:indent-0">
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                63536 51151
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm: justify-center w-full mb-6  ">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-3xl md:text-4xl lg:text-2xl font-semibold  pb-4">
                Pages
              </h4>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About-us</Link>
              </li>
              <li>
                <Link to="/contact">Contact-us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full items-center justify-center mb-6">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-3xl md:text-4xl lg:text-2xl font-semibold  pb-4 ">
                Services
              </h4>
            </div>

            <ul className="">
              <li>ERP Solution</li>
              <li>Android/Ios Development</li>
              <li>Web Application</li>
              <li>Web Services/Hosting</li>
              <li>Accounting Software</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-8" style={{ backgroundColor: "#0a1f45" }}>
        Copyright ©{currentYear} Prisha Software Pvt Ltd. All rights reserved.
      </div>
      <div className="fixed bottom-6 right-1 flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
        <BackToTopButton />
      </div>
    </footer>
  );
}

export default Footer;
