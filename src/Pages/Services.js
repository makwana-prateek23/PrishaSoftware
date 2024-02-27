import React from "react";
import Layout from "../Components/Layout";
import Counter from "../Components/Counter";
import Quality1 from "../Components/Assets/Services/Quality1.png";
import Quality2 from "../Components/Assets/Services/Quality2.png";
import Quality3 from "../Components/Assets/Services/Quality3.png";
import Serviceimage from "../Components/Assets/Services/Serviceimage.png";
function Services() {
  const sections = [
    {
      icon: "fa-brands fa-rocketchat",
      heading: "Exceptional Support",
      paragraph:
        "Experience unparalleled customer support with our dedicated team, ensuring prompt assistance and resolution to all your queries and concerns.",
    },
    {
      icon: "fa-solid fa-chart-simple",
      heading: "Proven Track Record",
      paragraph:
        "Benefit from our extensive experience and proven track record in delivering successful solutions, backed by a portfolio of satisfied clients and successful projects.",
    },
    {
      icon: "fa-solid fa-bullhorn",
      heading: "Optimized Performance",
      paragraph:
        "Elevate your business image with our cutting-edge software solutions, designed to enhance efficiency, productivity, and overall performance, providing your clients with an exceptional user experience.",
    },
  ];
  const section2 = [
    {
      icon: "fa-regular fa-star",
      heading: "Best Reviews",
      paragraph:
        "Our software has garnered top ratings and rave reviews from our satisfied clients, making us a trusted choice in the industry.",
    },
    {
      icon: "fa-solid fa-cloud-arrow-up",
      heading: "Cloud Support",
      paragraph:
        "Experience seamless integration and scalability with our cloud support services, ensuring your software solutions are always accessible and adaptable to your growing needs.",
    },
    {
      icon: "fa-solid fa-sliders",
      heading: "Easy Connectivity",
      paragraph:
        "Connect effortlessly with our software solutions, designed with user-friendly interfaces and streamlined processes to enhance productivity and collaboration within your organization.",
    },
  ];
  return (
    <div>
      <Layout>
        <main>
          <div className="ServicesBack  sm: pb-16 md:py-12 lg:py-16 xl:py-16 flex justify-center items-center text-center">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-semibold"
              style={{ color: "var(--primary-color)" }}
            >
              Our <span style={{ color: "var(--text-color)" }}>Services</span>
            </h2>
          </div>

          <section className="Service-main mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-screen-xl">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
              <div className="md:w-1/2 md:mr-6">
                <h6 className="text-lg text-text-color mb-2">Our Expertise</h6>
                <h2 className="text-5xl font-semibold mb-4 text-primary-color">
                  We have a wide range <br /> of expertise <br /> in different
                  <span className="text-text-color"> services</span>
                </h2>
                <p className="text-2xl text-gray-400 mb-4">
                  We provide almost all the trending <br /> services in the
                  software field
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul>
                      <li>Web Services/Hosting</li>
                      <li>ERP solution</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Android development</li>
                      <li>Accounting Software</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" lg:flex justify-center items-center gap-4">
                <div className=" my-2 mb-6  sm:mt-6">
                  <div
                    className="Servicefeature1 relative  mb-6 px-4 lg:bottom-12 flex flex-col pb-12 p-8  rounded-lg bg-red-100"
                    data-aos="zoom-in"
                  >
                    <div>
                      <img src={Quality1} alt="" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-semibold"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Innovative Thinking
                      </h3>
                      <p>Your Trust is our main focus</p>
                    </div>
                  </div>
                  <div
                    className=" Servicefeature2  sm:flex flex-col lg:top-12 p-8 relative rounded-lg bg-pink-100"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div>
                      <img src={Quality2} alt="" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-semibold"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Best Quality
                      </h3>
                      <p>Your Trust is our main focus</p>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div
                  className="lg:relative top-24 Servicefeature3  sm:my-4 p-8 rounded-lg bg-pink-100"
                  data-aos="zoom-in"
                >
                  <div>
                    <img src={Quality3} alt="" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Data Security
                    </h3>
                    <p>Your Trust is our main focus</p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </section>
          <section>
            <div
              className="ServiceBack2"
              style={{ backgroundColor: "#053fa2" }}
            >
              <div className="flex flex-col md:flex-row justify-center items-center py-16">
                <div className="mx-4 md:mx-12 my-4 md:mb-0 text-center">
                  <Counter number={250} title={"Clients"} />
                </div>
                <div className="mx-4 md:mx-12 my-4 md:mb-0 text-center">
                  <Counter number={8} title={"Year of Experience"} />
                </div>
                <div className="mx-4 md:mx-12 my-4 md:mb-0 text-center">
                  <Counter
                    number={16}
                    title={"Featured Projects"}
                    className="text-white"
                  />
                </div>
                <div className="mx-4 md:mx-12 my-4 md:mb-0 text-center">
                  <Counter number={12} title={"Multi Services"} />
                </div>
              </div>
            </div>
          </section>
          <section style={{ backgroundColor: "#fef2f4" }}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-screen-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-1">
                  {sections.map((section, index) => (
                    <div key={index} className="flex flex-col mb-6">
                      <div className="mb-6 flex justify-between items-center">
                        <div style={{ flex: "1 1 50%" }}>
                          <h5
                            className="text-2xl ml-2 font-bold"
                            style={{ color: "var(--primary-color)" }}
                          >
                            {section.heading}
                          </h5>
                          <p className="text-gray-400">{section.paragraph}</p>
                        </div>
                        <div>
                          <i
                            className={`fa- ${section.icon} text-3xl text-red-500 mb-2`}
                          ></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle Column */}
                <div className="md:col-span-1">
                  <img
                    src={Serviceimage}
                    alt="Serviceimage"
                    className="mx-auto md:w-full"
                  />
                </div>

                {/* Right Column */}
                <div className="md:col-span-1">
                  {section2.map((section2, index) => (
                    <div
                      key={index}
                      className="flex flex-col mb-6"
                      style={{ width: "180px" }}
                    >
                      <div className="mb-6 flex justify-between ">
                        <div style={{ flex: "1 1 50%" }}>
                          <h5
                            className="text-2xl ml-3 font-bold"
                            style={{ color: "var(--primary-color)" }}
                          >
                            {section2.heading}
                          </h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section2.paragraph,
                            }}
                          ></p>
                        </div>
                        <div>
                          <i
                            className={`fa- ${section2.icon} text-3xl text-red-500 mb-2`}
                          ></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default Services;
