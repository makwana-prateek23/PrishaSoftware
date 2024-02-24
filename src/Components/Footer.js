import React from "react";
import logo from "../Components/Assets/logo.png";
import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTop";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white pt-12  "
      style={{ backgroundColor: "#0d2753" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="flex box-border bg-white mb-2 text-center rounded-md p-2 footerLogo">
              <img src={logo} alt="Company Logo" className="h-14" />
            </div>
            <div>
              <p className="mb-4">
                We are providing premium quality Services and Softwares.
              </p>
            </div>
            <div className="flex items-center">
              <ul className="flex w-full">
                <li className="mr-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                      <i
                        className="fa-brands fa-facebook"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
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
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
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
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div>
              <h4 className="text-2xl font-semibold pb-2 text-center">
                Contact Info
              </h4>
            </div>
            <ul>
              <li className="">
                <span style={{ color: "var(--text-color)" }} className="mr-2 ">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                406/A, Forth Floor, Shivalay Complex, Mavdi Chowk,
                <span className="mb-2">
                  Mavdi Main Road, Mavdi, Rajkot, Gujarat 360004
                </span>{" "}
              </li>
              <li className="">
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2"
                >
                  <i className="fa-regular fa-clock"></i>
                </span>
                Monday-Saturday : 9am-7pm
              </li>
              <li className="s">
                {" "}
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2"
                >
                  <i className="fa-regular fa-envelope"></i>
                </span>
                info@Prishasoftware.com
              </li>
              <li>
                <span
                  style={{ color: "var(--text-color)" }}
                  className="mr-2 my-2 "
                >
                  <i className="fa-solid fa-phone"></i>
                </span>
                63536 51151
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-2xl font-semibold pb-2 text-center">Pages</h4>
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
                  <Link>Portfolio</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Our Team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-center items-center w-full">
              <div>
                <h4 className="text-2xl font-semibold pb-2 ">Services</h4>
              </div>
              <div className="">
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
        </div>
      </div>
      <div className="text-center py-8" style={{ backgroundColor: "#0a1f45" }}>
        Copyright ©{currentYear} Prisha Software Pvt Ltd. All rights reserved.
      </div>
      <div className="fixed bottom-6 right-4 flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
        <BackToTopButton />
      </div>
    </footer>
  );
}

export default Footer;
