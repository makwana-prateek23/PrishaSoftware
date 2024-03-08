import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        {/* Standard meta tags */}
        <title>About PrishSoftware - Our Mission, Vision, and Team</title>
        <meta
          name="description"
          content="Learn about PrishSoftware, our mission, vision, and the dedicated team behind our innovative solutions. Discover how we can help your business succeed."
        />
        <meta
          name="keywords"
          content="Prisha Software, Software Company, Reactjs, PHP, About Page,Web development , Software Solution , Digital LandScape , AcccountDigital, 24/7 Support"
        />

        {/* Facebook meta tags */}
        <meta
          property="og:title"
          content="About PrishSoftware - Our Mission, Vision, and Team"
        />
        <meta property="og:image" content="../Components/Assets/newlogo.webp" />
        <meta
          property="og:description"
          content="Learn about PrishSoftware, our mission, vision, and the dedicated team behind our innovative solutions. Discover how we can help your business succeed."
        />

        {/* Twitter meta tags */}
        <meta
          name="twitter:title"
          content="About PrishSoftware - Our Mission, Vision, and Team"
        />
        <meta
          name="twitter:image"
          content="../Components/Assets/newlogo.webp"
        />
        <meta
          name="twitter:description"
          content="Learn about PrishSoftware, our mission, vision, and the dedicated team behind our innovative solutions. Discover how we can help your business succeed."
        />

        {/* LinkedIn meta tags */}
        <meta
          property="og:title"
          content="About PrishSoftware - Our Mission, Vision, and Team"
        />
        <meta property="og:image" content="../Components/Assets/newlogo.webp" />
        <meta
          property="og:description"
          content="Learn about PrishSoftware, our mission, vision, and the dedicated team behind our innovative solutions. Discover how we can help your business succeed."
        />
      </Helmet>

      <Layout>
        <div>
          <main>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-12">
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
                      Tailored Software Solutions
                    </h6>
                    <h3
                      className="text-3xl sm:text-3xl font-bold mb-6"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Elevate Your Business with
                      <br /> Custom Software Solutions
                    </h3>
                    <p className="text-sm sm:text-xl text-gray-400">
                      Our mission is to provide tailored software solutions that
                      empower businesses to achieve their goals. With our
                      expertise in cutting-edge technologies and commitment to
                      quality, we deliver premium software solutions customized
                      to meet the unique needs of your business.
                    </p>
                    <div className="mt-4">
                      <button
                        className="mx-2 my-4 text-white py-2 px-6 sm:px-12 sm:py-4 rounded-full font-semibold"
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
                      Innovative Design
                    </h6>
                    <p>
                      Award-winning designs that captivate and engage users.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
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
                      Optimal Solutions
                    </h6>
                    <p>
                      Customized solutions tailored to meet your unique business
                      needs.
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
                    3
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Top-Quality Development
                    </h6>
                    <p>
                      Highly skilled developers delivering flawless, efficient
                      code.
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
                    4
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Exceptional Service
                    </h6>
                    <p>
                      Dedicated support team providing prompt and reliable
                      assistance.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col text-center justify-center items-center"
                  data-aos="zoom-in"
                >
                  <div
                    className="rounded-full w-24 h-24 flex text-white mb-4 text-2xl font-bold justify-center items-center"
                    style={{ backgroundColor: "orange" }}
                  >
                    5
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      Affordable Pricing
                    </h6>
                    <p>
                      Competitive pricing plans to fit any budget without
                      compromising quality.
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
                    6
                  </div>
                  <div>
                    <h6
                      style={{ color: "#01358d" }}
                      className="text-2xl font-semibold mb-4"
                    >
                      24/7 Support
                    </h6>
                    <p>
                      Round-the-clock assistance ensuring uninterrupted service
                      and peace of mind.
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
                    Have questions or inquiries? Reach out to us today. Our team
                    is here to assist you.
                  </p>
                  <div className="my-12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-3xl flex flex-col md:flex-row justify-between cursor-pointer items-center h-auto md:h-14">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-full md:w-10/12 bg-white rounded-3xl h-12 px-4 cursor-pointer outline-none mb-4 md:mb-0 md:mr-2"
                    />
                    <div>
                      <button
                        className="rounded-3xl h-12 px-6 text-white"
                        style={{ backgroundColor: "#f9556d" }}
                      >
                        Send Message
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
                    About Prisha Software
                  </h6>
                  <h3
                    className=" text-3xl sm:text-4xl lg:text-3xl font-bold mb-4"
                    style={{ color: "#01358d" }}
                  >
                    Revolutionizing the Digital Landscape
                  </h3>
                  <p className="text-gray-400 text-2xl">
                    Prisha Software is committed to pioneering digital
                    transformation through innovative solutions. Our goal is to
                    redefine the digital landscape and empower businesses to
                    achieve their full potential. Join us in shaping the future
                    of technology.
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
