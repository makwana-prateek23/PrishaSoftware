import React from "react";
import Layout from "../Components/Layout";
function ContactUs() {
  return (
    <div>
      <Layout>
        <main>
          <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-16">
                  <h2
                    className="text-5xl font-bold mb-2"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Get in{" "}
                    <span style={{ color: "var(--text-color)" }}>touch</span>
                  </h2>
                  <p className="text-gray-400 mb-4">
                    If you have an query, please get in touch with us, we will
                    revert back quickly.
                  </p>
                  <div className="mb-4">
                    <ul>
                      <li className="text-gray-500 mb-2 ">
                        <span
                          style={{ color: "var(--text-color)" }}
                          className="mr-2 "
                        >
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        406/A, Forth Floor, Shivalay Complex,Mavdi Chowk, <br />
                        Mavdi Main Road, Mavdi, Rajkot, Gujarat 360004
                      </li>
                      <li className="text-gray-500 mb-2">
                        <span
                          style={{ color: "var(--text-color)" }}
                          className="mr-2"
                        >
                          <i className="fa-regular fa-clock"></i>
                        </span>
                        Monday - Saturday : 9am - 7pm
                      </li>
                      <li className="text-gray-500 mb-2">
                        {" "}
                        <span
                          style={{ color: "var(--text-color)" }}
                          className="mr-2 "
                        >
                          <i className="fa-regular fa-envelope"></i>
                        </span>
                        info@Prishasoftware.com
                      </li>
                      <li>
                        <span
                          style={{ color: "var(--text-color)" }}
                          className="mr-2 "
                        >
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        63536 51151
                      </li>
                    </ul>
                  </div>
                  <div className="flex mb-2">
                    <div className="px-2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-red-100 rounded-lg p-2 cursor-pointer"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="email"
                        className="bg-red-100 rounded-lg p-2 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Enter your messege.."
                      rows={5}
                      className="w-full bg-red-100 rounded-xl p-2"
                    ></textarea>
                    <button
                      className="mx-2 my-4 text-white py-4 px-12 rounded-full font-semibold"
                      style={{
                        backgroundColor: "var(--text-color)",
                        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Send now
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                  <iframe
                    title="CompanyAdress"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.794371775465!2d70.7792603805802!3d22.258078726495796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca591345423d%3A0x4d97ae911e8f6828!2sPrisha%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1708406172814!5m2!1sen!2sin"
                    style={{ width: "700px", height: "600px" }}
                  ></iframe>{" "}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default ContactUs;
