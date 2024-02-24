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
      heading: "Amazing Support",
      paragraph: "We Provide amazing <br> support to our clients",
    },
    {
      icon: "fa-solid fa-chart-simple",
      heading: "Amazing Suport",
      paragraph: "We have a great record <br>in this business",
    },
    {
      icon: "fa-solid fa-bullhorn",
      heading: "Best Image",
      paragraph: "Clients will have <br> great experience",
    },
  ];
  const section2 = [
    {
      icon: "fa-regular fa-star",
      heading: "Best reviews",
      paragraph: "We provide best <br>quality software",
    },
    {
      icon: "fa-solid fa-cloud-arrow-up",
      heading: "Cloud Support",
      paragraph: "We also Provide cloud <br> support with our software",
    },
    {
      icon: "fa-solid fa-sliders",
      heading: "Connect Easily",
      paragraph: "We also Provide   cloud support <br> with our software",
    },
  ];
  return (
    <div>
      <Layout>
        <main>
          <div className="ServicesBack py-16 flex justify-center items-center text-center">
            <h2
              className="text-7xl font-semibold"
              style={{ color: "var(--primary-color)" }}
            >
              Our <span style={{ color: "var(--text-color)" }}>Services</span>
            </h2>
          </div>
          <section className="Service-main mx-auto px-2 sm:px-6 lg:px-8 py-4 max-w-screen-xl">
            <div className="flex justify-between items-center">
              <div>
                {" "}
                <h6
                  style={{ color: "var(--text-color)" }}
                  className="text-lg mb-2"
                >
                  Our Expertise
                </h6>
                <h2
                  className="text-5xl font-semibold mb-4"
                  style={{ color: "var(--primary-color)" }}
                >
                  We have a wide range
                  <br />
                  of expertise <br />
                  in different
                  <span style={{ color: "var(--text-color)" }}> services</span>
                </h2>
                <p className="text-2xl text-gray-400 mb-4">
                  We provides you almost all the trending <br /> services in
                  software field{" "}
                </p>
                <div className="grid grid-cols-2">
                  <div className="">
                    <ul>
                      <li>Web Services/Hosting</li>
                      <li>Erp soution </li>
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
              <div className="flex justify-center items-center gap-4">
                <div>
                  <div
                    className="Servicefeature1 relative bottom-12 flex flex-col pb-12 p-8 rounded-lg bg-red-100"
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
                    className="relative Servicefeature2 top-12 p-8 rounded-lg bg-pink-100"
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
                  className="relative top-24 Servicefeature3 m-2  p-8 rounded-lg bg-pink-100"
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
              </div>
            </div>
          </section>
          <section>
            <div
              className="ServiceBack2"
              style={{ backgroundColor: "#053fa2" }}
            >
              <div className="flex justify-center items-center py-16">
                <div className="mx-12 text-center">
                  <Counter number={250} title={"Clients"} />
                </div>
                <div className="mx-12 text-center">
                  <Counter number={8} title={"Year of Experience"} />
                </div>
                <div className="mx-12 text-center">
                  <Counter
                    number={16}
                    title={"featured Projects"}
                    className="text-white"
                  />
                </div>
                <div className="mx-12 text-center">
                  <Counter number={12} title={"Multi Services"} />
                </div>
              </div>
            </div>
          </section>
          <section style={{ backgroundColor: "#fef2f4" }}>
            <div className="mx-auto px-2 sm:px-6 lg:px-8 py-24 max-w-screen-xl">
              <div className="flex justify-between items-center ">
                <div>
                  {sections.map((section, index) => (
                    <div key={index} className="flex flex-col  mb-6">
                      <div className="mb-6 flex justify-between ">
                        <div style={{ flex: "1 1 50%" }}>
                          <h5
                            className="text-2xl ml-2 font-bold"
                            style={{ color: "var(--primary-color)" }}
                          >
                            {section.heading}
                          </h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.paragraph,
                            }}
                          ></p>
                        </div>
                        <div className="">
                          <i
                            className={`fa- ${section.icon} text-3xl text-red-500 mb-2`}
                          ></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle Column */}
                <div className="mr-2">
                  <img src={Serviceimage} alt="Serviceimage" />
                </div>

                {/* Right Column */}
                <div>
                  {section2.map((section2, index) => (
                    <div
                      key={index}
                      className="flex flex-col  mb-6"
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
                        <div className="">
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
