import React from "react";
import Layout from "../Components/Layout";
import Like from "../Components/Assets/LIke.png";
import AboutSwiper from "../Components/AboutSwiper";
const images = {
  client1: {
    normal: require("../Components/Assets/Client1.png"),
    hover: require("../Components/Assets/Client1a.png"),
  },
  client2: {
    normal: require("../Components/Assets/Client2.png"),
    hover: require("../Components/Assets/Cient2a.png"),
  },
  client3: {
    normal: require("../Components/Assets/Client3.png"),
    hover: require("../Components/Assets/Client3a.png"),
  },
};
function AboutUs() {
  return (
    <div>
      <Layout>
        <div>
          <main>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="flex flex-col sm:flex-row items-center">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6"
                >
                  <img src={Like} alt="likeus" />
                </div>
                <div>
                  <div className="">
                    <h6 style={{ color: "var(--text-color)" }}>
                      Premium Quality Software
                    </h6>
                    <h3
                      className="text-3xl sm:text-5xl font-bold mb-6"
                      style={{ color: "var(--primary-color)" }}
                    >
                      We provide premium
                      <br /> quality{" "}
                      <span style={{ color: "var(--text-color)" }}>
                        softwares
                      </span>
                    </h3>
                    <p className="text-base sm:text-xl text-gray-400">
                      Lorem ipsum dolor sit amet consectetur
                      <br />
                      adipisicing elit. Perferendis placeat iure dolores.
                    </p>
                    <div className="mt-4">
                      <button
                        className="mx-2 my-4 text-white py-3 px-8 sm:px-12 rounded-full font-semibold"
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
              </div>
            </div>

            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 max-w-screen-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <div
                  className="flex flex-col text-center items-center justify-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-2xl font-bold text-white justify-center mb-4 items-center"
                    style={{ backgroundColor: "#01358d" }}
                  >
                    1
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-2"
                    >
                      Great Design
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse dicta impedit similique!
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col text-center justify-center  items-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 text-white mb-4 text-2xl font-bold flex justify-center items-center"
                    style={{ backgroundColor: "#9deed8" }}
                  >
                    2
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Optimal choice
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      <br /> adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-white mb-4 text-2xl font-bold justify-center items-center"
                    style={{ backgroundColor: "#f9556d" }}
                  >
                    {" "}
                    3
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Finest Quality
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-white text-2xl mb-4 font-bold justify-center items-center"
                    style={{ backgroundColor: "blue" }}
                  >
                    {" "}
                    4
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Premium Service
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
                  data-aos="zoom-in"
                  data-a
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-white mb-4 text-2xl font-bold justify-center items-center"
                    style={{ backgroundColor: "orange" }}
                  >
                    {" "}
                    5
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Affordable Price
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-white text-2xl mb-4 font-bold justify-center items-center"
                    style={{ backgroundColor: "green" }}
                  >
                    6{" "}
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      24/7 Support
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="email">
              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
                <div className="flex flex-col justify-center items-center">
                  <h6>Contact us</h6>
                  <h3
                    className="text-6xl font-bold mb-4"
                    style={{ color: "#01358d" }}
                  >
                    Get in{" "}
                    <span style={{ color: "var(--text-color)" }}>touch</span>
                  </h3>
                  <p className="text-white text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci deserunt voluptates similique error?
                  </p>
                  <div className="my-12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-3xl flex flex-col md:flex-row justify-between cursor-pointer items-center h-auto md:h-14">
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full md:w-10/12 bg-white rounded-3xl h-12 px-4 cursor-pointer outline-none mb-4 md:mb-0 md:mr-2"
                    />
                    <div>
                      <button
                        className="rounded-3xl h-12 px-4 text-white"
                        style={{ backgroundColor: "#f9556d" }}
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container-fluid px-4 sm:px-6 lg:px-8 py-16">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <AboutSwiper images={images} />
                  </div>
                </div>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                  <h6 style={{ color: "var(--text-color)" }}>
                    Prisha Software
                  </h6>
                  <h3
                    className="text-5xl font-bold mb-4"
                    style={{ color: "#01358d" }}
                  >
                    Our Vision is to make <br /> a Digital{" "}
                    <span style={{ color: "var(--text-color)" }}>
                      Revolution
                    </span>
                  </h3>
                  <p className="text-gray-400 text-2xl">
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Adipisci deserunt voluptates similique
                    error?
                  </p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                      <span className="text-base font-medium text-blue-700 dark:text-white">
                        Smart work
                      </span>
                      <span
                        className="text-sm font-medium dark:text-white"
                        style={{ color: "var(--text-color)" }}
                      >
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <div className="flex justify-between">
                      <span
                        className="text-base font-medium dark:text-white"
                        style={{ color: "var(--text-color)" }}
                      >
                        Dedication
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base font-medium text-blue-700 dark:text-white">
                        Motivation
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </div>
  );
}

export default AboutUs;
