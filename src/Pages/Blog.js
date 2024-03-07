import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import blogimg1 from "../Components/Assets/Blog/blogimg1.jpg";
import blogimg2 from "../Components/Assets/Blog/blogimg2.jpg";
function Blog() {
  return (
    <div>
      <Helmet>
        <title>
          PrishSoftware Blog - Stay Informed with Our Latest Insights
        </title>
        <meta
          name="description"
          content="Explore the PrishSoftware blog for the latest insights, trends, and updates in the world of software development and technology. Stay informed to stay ahead."
        />
        <meta
          name="keywords"
          content="Blog, PrishSoftware Blog, Insights, Technology Trends, Software Development Updates"
        />

        <meta
          property="og:image"
          content="c:\Users\prishasoftware3\Downloads\Prisha Software1.png"
        />
      </Helmet>
      <div className="BlogImage">
        <Layout>
          <main>
            <section>
              <div className="text-center min-h-500 flex  justify-center items-center">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center"
                  style={{ color: "var(--primary-color)" }}
                >
                  Welcome to Prisha Software
                </h2>
              </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-screen-xl">
              <div>
                <div className="">
                  <div className="col-span-4 p-4">
                    <div className="rounded-lg">
                      <img src={blogimg2} alt="img1" className="rounded-2xl" />
                    </div>
                    <div className="my-4">
                      <div
                        className="text-lg"
                        style={{ color: "var(--text-color)" }}
                      >
                        Web Services
                      </div>
                      <div>
                        {" "}
                        <h3
                          className="text-4xl font-semibold mb-4"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Get the cutting edge web{" "}
                          <span style={{ color: "var(--text-color)" }}>
                            solution
                          </span>
                        </h3>
                      </div>
                      <div>
                        <p>
                          At Prisha, we're dedicated to harnessing the power of
                          cutting-edge technologies to deliver exceptional web
                          solutions. From dynamic user interfaces built with
                          React.js and Next.js to robust backend systems powered
                          by php and MySQL, we ensure our projects are at the
                          forefront of innovation. Additionally, our expertise
                          extends to PHP and Reactjs enabling seamless
                          integration of custom functionalities and dynamic
                          content.
                        </p>
                      </div>
                      <div className="" style={{ color: "var(--text-color)" }}>
                        <Link to="/contact">
                          Read more <span>{">"}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="col-span-4 p-4">
                    <div className="rounded-lg">
                      <img src={blogimg1} alt="img1" className="rounded-2xl" />
                    </div>
                    <div className="my-4">
                      <div
                        className="text-lg"
                        style={{ color: "var(--text-color)" }}
                      >
                        Application Development
                      </div>
                      <div>
                        {" "}
                        <h3
                          className="text-4xl font-semibold mb-4"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Get the cutting edge Application{" "}
                          <span style={{ color: "var(--text-color)" }}>
                            Service
                          </span>
                        </h3>
                      </div>
                      <div>
                        <p>
                          At Prisha, we excel in crafting cutting-edge
                          applications that leverage the latest technologies to
                          deliver unparalleled user experiences. Our development
                          stack includes industry-leading frameworks such as
                          React Native, Flutter, and Ionic for building
                          cross-platform mobile applications with native-like
                          performance.
                        </p>
                      </div>
                      <div className="" style={{ color: "var(--text-color)" }}>
                        <Link to="/contact">
                          Read more <span>{">"}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Layout>
      </div>
    </div>
  );
}

export default Blog;
