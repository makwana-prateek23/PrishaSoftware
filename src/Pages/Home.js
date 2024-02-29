import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import MySwiper from "../Components/MYSwiper";
import Quality1 from "../Components/Assets/Quality1.png";
import Quality2 from "../Components/Assets/Quality2.png";
import ImageBack2 from "../Components/Assets/ImageBack2.png";
import CircularProgressBar from "../Components/CircularBar";
import Laptop from "../Components/Assets/Laptop.png";
import backimage from "../Components/Assets/backImage.png";
function Home() {
  const [questionVisible, setQuestionVisible] = useState([false, false, false]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const toggleQuestionVisibility = (index) => {
    const updatedVisible = questionVisible.map((value, i) =>
      i === index ? !value : false
    );
    setQuestionVisible(updatedVisible);
    setSelectedQuestion(updatedVisible[index] ? index : null);
  };
  return (
    <div>
      <div className="wrapper">
        <Layout>
          <main>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12  xl:py-24 max-w-screen-xl">
              <div className="py-12 sm:py-8">
                <div className="text-center">
                  {" "}
                  <div>
                    <h3
                      className="text-3xl font-bold sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl"
                      style={{ color: "var(--primary-color)" }}
                    >
                      PrishaSoftware is a leading
                      <br />
                      Product
                      <br /> Based Software
                      <span style={{ color: "var(--text-color)" }}>
                        {" "}
                        Company
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  <div className="flex justify-center sm:justify-end">
                    <div
                      className="text-center mt-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <button
                        className="mx-2 my-4 text-white py-4 px-12 sm:px-12 rounded-full font-semibold"
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
                    <div
                      className="mt-2"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <button
                        className="mx-2 my-4 text-white py-4 px-12 rounded-full button-1"
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
                  data-aos-delay="200"
                  data-aos="zoom-in"
                >
                  <MySwiper />
                </div>
              </section>
            </div>
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
                        Discover tailored software solutions. Our experts
                        evaluate the market, presenting optimal choices in
                        project management, CRM, ERP, and more.
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
                        Discover our software solutions renowned for their
                        exceptional quality and performance.
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
                        Products designed to save time and provide exceptional
                        value to our customers.
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

            <section
              className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl"
              style={{ position: "relative" }}
            >
              <div className="flex flex-col-reverse sm:flex-col  md:flex-col lg:flex-row items-center justify-between py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
                <div
                  className="w-full sm:w-full md:w-full lg:w-1/2 mt-8 sm:mt-0 items-center sm:p-12"
                  data-aos="fade-right"
                >
                  <h6
                    className="text-sm sm:text-base md:text-base lg:text-xl"
                    style={{ color: "var(--text-color)" }}
                  >
                    Streamline Your Business with Optimized Solutions
                  </h6>
                  <h2
                    className="text-3xl sm:text-4xl md:text=5xl lg:text-6xl font-semibold mb-2"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Elevate Your Operations with <br />
                    <span
                      className="text-3xl sm:text-2xl"
                      style={{ color: "var(--text-color)" }}
                    >
                      Optimized Software Solutions
                    </span>
                  </h2>
                  <p className="quality-text text-gray-400 text-sm sm:text-base md:text-2xl">
                    We specialize in providing tailored tech solutions designed
                    to optimize business processes across various industries.
                    Whether you need web development, mobile apps, or custom
                    software, we've got you covered.
                  </p>
                </div>
                <div
                  className="w-full sm:w-1/2 bg-cover bg-center mt-6 sm:mt-0"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img src={ImageBack2} alt="image2" className="w-full" />
                </div>
              </div>
            </section>

            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                {/* Quality 1 */}
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={90} />
                  </div>
                  <div className="text-center p-4">
                    <h6 className="text-lg sm:text-xl font-semibold mb-2">
                      User-Centric Design
                    </h6>
                    <p className="text-sm sm:text-base">
                      Intuitive and user-friendly interfaces tailored to meet
                      user needs.
                    </p>
                  </div>
                </div>

                {/* Quality 2 */}
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={85} />
                  </div>
                  <div className="text-center p-4">
                    <h6 className="text-lg sm:text-xl font-semibold mb-2">
                      Scalability
                    </h6>
                    <p className="text-sm sm:text-base">
                      Built with scalability in mind to grow alongside your
                      business.
                    </p>
                  </div>
                </div>

                {/* Quality 3 */}
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={95} />
                  </div>
                  <div className="text-center p-4">
                    <h6 className="text-lg sm:text-xl font-semibold mb-2">
                      Reliability
                    </h6>
                    <p className="text-sm sm:text-base">
                      Reliable and robust solutions ensuring uninterrupted
                      operations.
                    </p>
                  </div>
                </div>

                {/* Quality 4 */}
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={80} />
                  </div>
                  <div className="text-center p-4">
                    <h6 className="text-lg sm:text-xl font-semibold mb-2">
                      Security
                    </h6>
                    <p className="text-sm sm:text-base">
                      High-level security measures to protect sensitive data.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 py-10"
                style={{
                  backgroundImage: `url(${backimage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="pl-4 sm:pl-12 mb-4">
                  <div className="mb-6">
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-center rounded-lg mb-2 bg-red-100 px-4 sm:w-11/12">
                        <p className="flex-1">
                          What software solutions do you offer?
                        </p>
                        <button
                          className="rounded-full w-8 h-8 bg-white"
                          onClick={() => toggleQuestionVisibility(0)}
                        >
                          {questionVisible[0] ? "-" : "+"}
                        </button>
                      </div>
                      {questionVisible[0] && (
                        <div className="bg-green-100 rounded-lg p-4 mb-2 sm:w-8/12">
                          <p>
                            We offer a wide range of software solutions
                            including web development, mobile app development,
                            and custom software development.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-center rounded-lg mb-2 bg-red-100 px-4 sm:w-11/12">
                        <p className="flex-1">
                          Do you provide ongoing support and maintenance?
                        </p>
                        <button
                          className="rounded-full w-8 h-8 bg-white"
                          onClick={() => toggleQuestionVisibility(1)}
                        >
                          {questionVisible[1] ? "-" : "+"}
                        </button>
                      </div>
                      {questionVisible[1] && (
                        <div className="bg-green-100 rounded-lg p-4 mb-2 sm:w-8/12">
                          <p>
                            Yes, we offer comprehensive support and maintenance
                            services to ensure the smooth functioning of your
                            software solutions.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-center rounded-lg mb-2 bg-red-100 px-4 sm:w-11/12">
                        <p className="flex-1">
                          Can you develop software tailored to our specific
                          needs?
                        </p>
                        <button
                          className="rounded-full w-8 h-8 bg-white"
                          onClick={() => toggleQuestionVisibility(2)}
                        >
                          {questionVisible[2] ? "-" : "+"}
                        </button>
                      </div>
                      {questionVisible[2] && (
                        <div className="bg-green-100 rounded-lg p-4 mb-2 sm:w-8/12">
                          <p>
                            Yes, we specialize in developing custom software
                            solutions tailored to the unique requirements of
                            each client.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Repeat the question and answer section for each question */}
                  </div>
                </div>

                <div className="py-4 sm:py-0 mb-4 px-4">
                  <h6
                    className="text-2xl sm:text-3xl mb-2"
                    style={{ color: "var(--text-color)" }}
                  >
                    Transform Your Business with Innovative Software Solutions
                  </h6>
                  <h3
                    className="text-3xl sm:text-5xl font-bold mb-6"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Empower Your Enterprise with Our Cutting-Edge Software
                  </h3>
                  <p className="text-base sm:text-xl text-gray-400">
                    Our software solutions are designed to revolutionize your
                    business operations. From streamlining processes to
                    enhancing efficiency, we offer transformative software
                    services that propel your enterprise forward.
                  </p>
                  <div className="mt-4">
                    <button
                      className="mx-2 my-4 text-white py-4 px-8 sm:px-12 rounded-full font-semibold"
                      style={{
                        backgroundColor: "var(--text-color)",
                        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <Link to="/contact">Read More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
                <div className="p-8 text-center md:text-left md:w-1/2">
                  <h6 style={{ color: "var(--text-color)" }}>
                    Cutting-Edge Software Solutions
                  </h6>
                  <h3
                    className="text-3xl md:text-5xl font-bold mb-6"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Elevate Your Business with <br />
                    <span style={{ color: "var(--text-color)" }}>
                      Premium Software
                      <br /> Solutions
                    </span>
                  </h3>
                  <p className="text-base md:text-xl text-gray-400">
                    We specialize in delivering innovative and top-notch
                    software solutions tailored to meet the unique needs of your
                    business. From web applications to mobile apps,
                    <br /> we provide cutting-edge technology solutions that
                    drive growth and success.
                  </p>
                  <div className="mt-4">
                    <button
                      className="mx-2 my-4 text-white py-4 px-8 md:px-12 rounded-full font-semibold"
                      style={{
                        backgroundColor: "var(--text-color)",
                        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <Link to="/contact">Learn More</Link>
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  className="md:w-1/2"
                >
                  <img
                    src={Laptop}
                    className="laptopImage"
                    alt="laptopimage"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </section>
          </main>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
