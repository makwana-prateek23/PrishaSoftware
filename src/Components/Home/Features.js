import React from "react";
import Quality1 from "../Assets/Quality1.png";
import Quality2 from "../Assets/Quality2.png";
function Features() {
  return (
    <div>
      {" "}
      <section>
        <div className="features">
          <div className="features-inner px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mx-4 sm:mx-6 md:mx-8 my-8 lg:mx-12 xl:mx-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            <div
              className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 px-4 sm:px-8 flex flex-col items-center"
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className="mx-6 sm:mx-12">
                <img src={Quality2} className="Quality-1" alt="image1" />
              </div>
              <div className="px-6 sm:px-12 mt-6 sm:mt-10 mb-3">
                <h3
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center"
                  style={{ color: "var(--primary-color)" }}
                >
                  Optimal choice
                </h3>
                <p className="m-2 sm:m-4 text-sm sm:text-base md:text-base lg:text-base xl:text-base text-center">
                  Discover tailored software solutions. Our experts evaluate the
                  market, presenting optimal choices in project management, CRM,
                  ERP, and more.
                </p>
              </div>
            </div>
            <div
              className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 px-4 sm:px-8 flex flex-col items-center"
              data-aos-delay="300"
              data-aos="zoom-in"
            >
              <div className="mx-6 sm:mx-12">
                <img src={Quality1} alt="image2" className="Quality-2" />
              </div>
              <div className="px-6 sm:px-12 mt-6 sm:mt-10 mb-3">
                <h3
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center"
                  style={{ color: "var(--primary-color)" }}
                >
                  Finest quality
                </h3>
                <p className="m-2 sm:m-4 text-sm sm:text-base md:text-base lg:text-base xl:text-base text-center">
                  Discover our software solutions renowned for their exceptional
                  quality and performance.
                </p>
              </div>
            </div>
            <div
              className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 px-4 sm:px-8 flex flex-col items-center mt-6 sm:mt-10"
              data-aos-delay="400"
              data-aos="zoom-in"
            >
              <div className="mx-6 sm:mx-12">
                <img src={Quality2} alt="image3" className="Quality-3" />
              </div>
              <div className="px-6 sm:px-12 mt-6 sm:mt-10 mb-3">
                <h3
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center"
                  style={{ color: "var(--primary-color)" }}
                >
                  Time saving
                </h3>
                <p className="m-2 sm:m-4 text-sm sm:text-base md:text-base lg:text-base xl:text-base text-center">
                  Products designed to save time and provide exceptional value
                  to our customers.
                </p>
              </div>
            </div>
          </div>

          <div className="features-svg">
            <svg
              className="qodef-process-wave-line qodef-appeared"
              x="0px"
              y="0px"
              viewBox="0 0 1920 240"
              enableBackground="new 0 0 1920 240"
            >
              <g opacity="0.60">
                <path
                  className="qodef-process-wave"
                  fill="none"
                  stroke="#939597"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M-35.786,245C319.124,184.158,738.255-35.548,929.23,13.464s447.862,185.905,682.778,180.835c234.916-5.07,381.95-138.584,449.552-143.654"
                  style={{
                    strokeDasharray: "2185px",
                    strokeDashoffset: "0px",
                    transitionDelay: "0ms",
                  }}
                ></path>
                <path
                  className="qodef-process-wave"
                  fill="none"
                  stroke="#939597"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M-45.926,140.217c277.167,42.251,608.416-62.532,642.217-69.292c33.801-6.76,165.624-62.532,294.068-55.772s331.249,72.672,375.19,84.502s285.618,74.362,392.091,52.391C1747.276,133.551,1846.493,1.265,1920-43.136c13.808-8.341,26.708-13.58,38.468-14.382"
                  style={{
                    strokeDasharray: "2106px",
                    strokeDashoffset: "0px",
                    transitionDelay: "300ms",
                  }}
                ></path>
                <path
                  className="qodef-process-wave"
                  fill="none"
                  stroke="#939597"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M-20.575,158.808c152.104,10.14,468.143-30.421,586.446-65.912S1028,4.1,1167.527,48.955c72.973,23.459,260.267,141.964,338.009,148.724c77.742,6.76,361.67,8.45,424.202-59.152"
                  style={{
                    strokeDasharray: "2007px",
                    strokeDashoffset: "0px",
                    transitionDelay: "600ms",
                  }}
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
