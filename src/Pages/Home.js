import React, { useState } from "react";
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
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="py-12">
                <div className="text-center">
                  {" "}
                  <p
                    style={{ color: "var(--text-color)" }}
                    className="font-semibold"
                  >
                    Software Development{" "}
                  </p>
                  <div>
                    <h3
                      className="text-6xl font-bold"
                      style={{ color: "var(--primary-color)" }}
                    >
                      PrishaSoftware is a leading
                      <br />
                      Product Based Software
                      <span style={{ color: "var(--text-color)" }}>
                        {" "}
                        Company
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex justify-end">
                    <div className="text-center mt-4">
                      <button
                        className="mx-2 my-4 text-white py-4 px-12 rounded-full font-semibold"
                        style={{
                          backgroundColor: "var(--text-color)",
                          boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="mt-4">
                      <button
                        className="mx-2 my-4 text-white py-4 px-12 rounded-full button-1"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          boxShadow: "2px 6px 6px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
                <div className="flex justify-center">
                  <MySwiper />
                </div>
              </section>
            </div>
            <section>
              <div className="features ">
                <div className="features-inner px-24 mx-24 grid grid-cols-12">
                  {" "}
                  <div
                    className=" col-span-4 px-8 flex flex-col items-center"
                    data-aos-delay="200"
                    data-aos="zoom-in "
                  >
                    <div className="mx-12">
                      <img src={Quality2} className="Quality-1" alt="image1" />
                    </div>
                    <div className="px-12 mt-10 mb-3">
                      {" "}
                      <h3
                        className="text-2xl font-bold text-center"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Optimal choice
                      </h3>
                      <p className="m-4 text-center">
                        We Provide Optimal Choice for <br />
                        selecting the softwares
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-span-4 feature-2 px-8 flex flex-col items-center"
                    data-aos-delay="300"
                    data-aos="zoom-in"
                  >
                    <div className="mx-12">
                      <img src={Quality1} alt="image2" className="Quality-2" />
                    </div>
                    <div className="px-14 mt-10 mb-3">
                      <h3
                        className="text-2xl font-bold text-center"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Finest quality
                      </h3>
                      <p className="m-4 text-center">
                        {" "}
                        We have Finest Quality of Softwares
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-span-4  flex flex-col  items-center mt-16"
                    data-aos-delay="400"
                    data-aos="zoom-in"
                  >
                    <div className="mx-12">
                      <img src={Quality2} alt="image3" className="Quality-3" />
                    </div>
                    <div className="px-12 features-text mt-10 mb-3">
                      {" "}
                      <h3
                        className="text-2xl font-bold text-center"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Time saving{" "}
                      </h3>
                      <p className="m-4  text-center">
                        Our products are time saving and worth for the customer
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
                        d="M-35.786,245
        C319.124,184.158,738.255-35.548,929.23,13.464s447.862,185.905,682.778,180.835c234.916-5.07,381.95-138.584,449.552-143.654"
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
                        d="M-45.926,140.217
        c277.167,42.251,608.416-62.532,642.217-69.292c33.801-6.76,165.624-62.532,294.068-55.772s331.249,72.672,375.19,84.502
        s285.618,74.362,392.091,52.391C1747.276,133.551,1846.493,1.265,1920-43.136c13.808-8.341,26.708-13.58,38.468-14.382"
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
                        d="M-20.575,158.808
        c152.104,10.14,468.143-30.421,586.446-65.912S1028,4.1,1167.527,48.955c72.973,23.459,260.267,141.964,338.009,148.724
        c77.742,6.76,361.67,8.45,424.202-59.152"
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
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              {" "}
              <div className="flex items-center px-12">
                <div className="w-full  mt-8 items-center  p-12 ">
                  {" "}
                  <h6 style={{ color: "var(--text-color)" }}>
                    This is to showcase the image 2
                  </h6>
                  <h2
                    className="text-6xl font-semibold mb-2"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {" "}
                    Get the best quality <br />
                    Software{" "}
                    <span style={{ color: "var(--text-color)" }}>from us</span>
                  </h2>
                  <p className="quality-text text-gray-400">
                    We provide best and optimized quality software
                  </p>
                </div>
                <div className="Image-Back w-full">
                  <img src={ImageBack2} alt="image2" />
                </div>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              {" "}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 justify-center">
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={50} />{" "}
                  </div>{" "}
                  <div className="text-center p-8">
                    <h6 className="text-2xl mb-2 font-semibold">Prosperity</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={60} />{" "}
                  </div>{" "}
                  <div className="text-center p-8">
                    <h6 className="text-2xl mb-2 font-semibold">Prosperity</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={40} />{" "}
                  </div>{" "}
                  <div className="text-center p-8">
                    <h6 className="text-2xl mb-2 font-semibold">Prosperity</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <CircularProgressBar percentage={80} />{" "}
                  </div>{" "}
                  <div className="text-center p-8">
                    <h6 className="text-2xl mb-2 font-semibold">Prosperity</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div
                className="grid grid-cols-2 py-10"
                style={{
                  backgroundImage: `url(${backimage})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="pl-12">
                  <div className="flex h-1/6 justify-between items-center rounded-lg mb-2  bg-red-100 px-4 w-11/12">
                    <p>Fast Forward Question ??</p>
                    <button
                      className="rounded-full w-8 h-8 bg-white"
                      onClick={() => toggleQuestionVisibility(0)}
                    >
                      {" "}
                      {questionVisible[0] ? "-" : "+"}
                    </button>
                  </div>
                  {questionVisible[0] && (
                    <div className="bg-green-100 rounded-lg p-4 mb-2 w-8/12">
                      <p>Answer to Fast Forward Question</p>
                    </div>
                  )}

                  <div className="flex h-1/6 justify-between items-center rounded-lg mb-2 bg-red-100 px-4 w-11/12">
                    <p>Fast Forward Question ??</p>
                    <button
                      className="rounded-full w-8 h-8 bg-white"
                      onClick={() => toggleQuestionVisibility(1)}
                    >
                      {questionVisible[1] ? "-" : "+"}
                    </button>
                  </div>
                  {questionVisible[1] && (
                    <div className="bg-green-100 rounded-lg p-4 mb-2 w-8/12">
                      <p>Answer to Fast Forward Question</p>
                    </div>
                  )}

                  <div className="flex h-1/6 justify-between items-center rounded-lg mb-2 bg-red-100 px-4 w-11/12">
                    <p>Fast Forward Question ??</p>
                    <button
                      className="rounded-full w-8 h-8 bg-white"
                      onClick={() => toggleQuestionVisibility(2)}
                    >
                      {questionVisible[2] ? "-" : "+"}
                    </button>
                  </div>
                  {questionVisible[2] && (
                    <div className="bg-green-100 p-4 rounded-lg mb-2 w-8/12 transition-all duration-1500 transform translate-y-0">
                      <p>Answer to Fast Forward Question</p>
                    </div>
                  )}
                </div>
                <div className="">
                  <h6 style={{ color: "var(--text-color)" }}>
                    Premium Quality Software
                  </h6>
                  <h3
                    className="text-5xl font-bold mb-6"
                    style={{ color: "var(--primary-color)" }}
                  >
                    We provide premium
                    <br /> quality{" "}
                    <span style={{ color: "var(--text-color)" }}>
                      softwares
                    </span>
                  </h3>
                  <p className="text-xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Perferendis placeat iure dolores.
                  </p>
                  <div className=" mt-4">
                    <button
                      className="mx-2 my-4 text-white py-4 px-12 rounded-full font-semibold"
                      style={{
                        backgroundColor: "var(--text-color)",
                        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="flex px-14 justify-center">
                <div className="p-8">
                  <h6 style={{ color: "var(--text-color)" }}>
                    Premium Quality Software
                  </h6>
                  <h3
                    className="text-5xl font-bold mb-6"
                    style={{ color: "var(--primary-color)" }}
                  >
                    We provide premium
                    <br /> quality{" "}
                    <span style={{ color: "var(--text-color)" }}>
                      softwares
                    </span>
                  </h3>
                  <p className="text-xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Perferendis placeat iure dolores.
                  </p>
                  <div className=" mt-4">
                    <button
                      className="mx-2 my-4 text-white py-4 px-12 rounded-full font-semibold"
                      style={{
                        backgroundColor: "var(--text-color)",
                        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div>
                  <img src={Laptop} className="laptopImage" alt="laptopimage" />
                </div>
                <div></div>
              </div>
            </section>
          </main>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
