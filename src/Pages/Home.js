import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import Intro from "../Components/Home/Intro";
import Features from "../Components/Home/Features";
import ImageBack2 from "../Components/Assets/ImageBack2.webp";
import CircularProgressBar from "../Components/CircularBar";
import Laptop from "../Components/Assets/Laptop.png";
import backimage from "../Components/Assets/backImage.webp";
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
      <div>
        <Helmet>
          <title>Prisha Software</title>
          <meta
            name="description"
            content="Welcome to Prisha Software. We offer innovative software solutions for businesses."
          />
          <meta
            name="keywords"
            content="Prisha Software, Web Development, Application Development , Account Software , AcccountDigital"
          />
          <meta property="og:title" content="Home page" />

          <meta property="og:image" content="" />
        </Helmet>
        {/* The rest of your component's code */}
      </div>
      <div className="wrapper">
        <Layout>
          <main>
            <div className="py-16 sm:py-8">
              <Intro />
            </div>
            <div>
              <Features />
            </div>

            <section
              className="mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 sm:py-8 max-w-screen-xl"
              style={{ position: "relative" }}
            >
              <div className="flex flex-col-reverse sm:flex-col  md:flex-col lg:flex-row items-center justify-between py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
                <div
                  className="w-full sm:w-full md:w-full lg:w-1/2 mt-8 sm:mt-0 items-center sm:p-12"
                  data-aos="fade-right"
                >
                  <h6
                    className=" sm:text-2xl md:text-2xl lg:text-lg"
                    style={{ color: "var(--text-color)" }}
                  >
                    Streamline Your Business with Optimized Solutions
                  </h6>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-2"
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
                  className="w-full sm:w-1/2 flex justify-center  mt-6 sm:mt-0"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <img
                    src={ImageBack2}
                    alt="image2"
                    loading="lazy"
                    className="HomeImage"
                  />
                </div>
              </div>
            </section>

            <section className="mx-auto px-4 sm:px-6 sm:py-8 lg:px-8 lg:py-16  max-w-screen-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                {/* Quality 1 */}
                <div className="flex flex-col  items-center">
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

            <section className="mx-auto px-4 sm:px-6 lg:px-8 sm:py-8 lg:py-16 max-w-screen-xl">
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
                      {selectedQuestion === 0 && (
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
                      {selectedQuestion === 1 && (
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
                      {selectedQuestion === 2 && (
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
                    className="text-base sm:text-2xl lg:text-lg mb-2"
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
                      className="mx-2 my-4 text-white py-2 px-6 sm:px-12 sm:py-4 rounded-full font-semibold"
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
            <section className="mx-auto px-4 sm:px-6 sm:py-8 lg:px-8 lg:py-16 max-w-screen-xl">
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
                      className="mx-2 my-4 text-white py-2 px-6 sm:px-12 sm:py-4 rounded-full font-semibold"
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
                  className="md:w-1/2 flex justify-center"
                >
                  <img
                    src={Laptop}
                    className="laptopImage"
                    alt="laptopimage"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
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
