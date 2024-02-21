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
              <div className="flex flex-grow items-center">
                <div>
                  <img src={Like} alt="likeus" />
                </div>
                <div>
                  {" "}
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
              </div>
            </div>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 max-w-screen-xl">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col text-center items-center justify-center">
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
                      Lorem ipsum dolor sit amet consectetur
                      <br />
                      adipisicing elit. Esse dicta impedit similique!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-center justify-center  items-center">
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
                <div className="flex flex-col text-center justify-center items-center">
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
                <div className="flex flex-col text-center justify-center items-center">
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
                <div className="flex flex-col text-center justify-center items-center">
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
                <div className="flex flex-col text-center justify-center items-center">
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
                  <div className="my-12 bg-white w-6/12 rounded-3xl flex justify-between cursor-pointer items-center  h-14">
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className=" w-4/12 rounded-3xl h-9 px-4 cursor-pointer outline-none"
                      />
                    </div>
                    <button
                      className="rounded-3xl w-2/6 h-14 px-4 text-white"
                      style={{ backgroundColor: "#f9556d" }}
                    >
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div></div>
            </section>
            <section>
              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
                <div className="flex">
                  <div>
                    {" "}
                    <h6 style={{ color: "var(--text-color)" }}>
                      Prisha Software
                    </h6>
                    <h3
                      className="text-5xl font-bold mb-4"
                      style={{ color: "#01358d" }}
                    >
                      Our Vision is to make <br /> a Digital{" "}
                      <span style={{ color: "var(--text-color)" }}>
                        Revoultion
                      </span>
                    </h3>
                    <p className="text-gray-400 text-2xl">
                      Lorem ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Adipisci deserunt voluptates similique
                      error?
                    </p>
                  </div>
                  <div className="w-1/2">
                    <div className="flex justify-between mb-1">
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
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-base font-medium dark:text-white mb-1"
                        style={{ color: "var(--text-color)" }}
                      >
                        Dedication
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-blue-700 dark:text-white">
                        Motivation
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>
                <AboutSwiper images={images} />
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </div>
  );
}

export default AboutUs;
