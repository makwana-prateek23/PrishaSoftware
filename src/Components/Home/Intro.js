import React from "react";
import MySwiper from "../MYSwiper";
import { Link } from "react-router-dom";
function Intro() {
  return (
    <div>
      {" "}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12  xl:py-24 max-w-screen-xl">
        <div className=" sm:py-8">
          <div className="text-center">
            {" "}
            <h1
              className=" sm:text-2xl sm:font-bold md:text-4xl md:font-semibold lg:text-5xl lg:font-bold xl:text-6xl xl:font-bold"
              style={{ color: "var(--primary-color)" }}
            >
              PrishaSoftware is a leading
              <br />
              Product
              <br /> Based Software
              <span style={{ color: "var(--text-color)" }}> Company</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-center items-center sm:justify-end">
              <div
                className="text-center mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button
                  className="mx-2 my-4 text-white py-2 px-6 sm:px-12 sm:py-4 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--text-color)",
                    boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Link to="/about">Read More</Link>
                </button>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start">
              <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
                <button
                  className="mx-2 my-4 text-white py-2 px-6 sm:px-12 sm:py-4 rounded-full button-1"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "2px 6px 6px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Link to="/contact">Get in Touch</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="mx-auto px-4 sm:px-6 lg:px-8  sm:py-4 lg:py-8 md:py-6 xl:py-12 max-w-screen-xl">
          <div
            className="flex justify-center sm:justify-start md:justify-center lg:justify-center xl:justify-center"
            data-aos-delay="00"
            data-aos="zoom-in"
          >
            <MySwiper />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Intro;
