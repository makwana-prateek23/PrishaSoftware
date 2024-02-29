import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
function ContactUs() {
  return (
    <div>
      <div>
        <Helmet>
          <title>Contact Us - Prisha Software</title>
          <meta
            name="description"
            content="Get in touch with Prisha Software for inquiries, support, and collaborations."
          />
        </Helmet>
      </div>
      <Layout>
        <main>
          <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4 md:p-8">
                  <h2
                    className="text-3xl md:text-5xl font-bold mb-4"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Get in{" "}
                    <span style={{ color: "var(--text-color)" }}>touch</span>
                  </h2>
                  <p className="text-gray-400 mb-6 md:mb-8">
                    If you have a query, please get in touch with us. We will
                    respond promptly.
                  </p>
                  <ul className="mb-6 md:mb-8">
                    <li className="text-gray-500 mb-2">
                      <span className="text-red-500 mr-2">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      406/A, Fourth Floor, Shivalay Complex, Mavdi Chowk, Mavdi
                      Main Road, Mavdi, Rajkot, Gujarat 360004
                    </li>
                    <li className="text-gray-500 mb-2">
                      <span className="text-red-500 mr-2">
                        <i className="far fa-clock"></i>
                      </span>
                      Monday - Saturday : 9am - 7pm
                    </li>
                    <li className="text-gray-500 mb-2">
                      <span className="text-red-500 mr-2">
                        <i className="far fa-envelope"></i>
                      </span>
                      info@Prishasoftware.com
                    </li>
                    <li className="text-gray-500">
                      <span className="text-red-500 mr-2">
                        <i className="fas fa-phone"></i>
                      </span>
                      63536 51151
                    </li>
                  </ul>
                  <div className="flex flex-wrap mb-6 md:mb-8">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-red-100 rounded-lg p-2 focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-red-100 rounded-lg p-2 focus:outline-none"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder="Enter your message..."
                    rows={5}
                    className="w-full bg-red-100 rounded-lg p-2 mb-6 md:mb-8 focus:outline-none"
                  ></textarea>
                  <button
                    className="w-full md:w-auto text-white py-4 px-8 rounded-full font-semibold"
                    style={{
                      backgroundColor: "var(--text-color)",
                      boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Send now
                  </button>
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-8">
                  <div className="h-11/12 md:h-full sm:h-6/12">
                    <iframe
                      title="CompanyAdress"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.794371775465!2d70.7792603805802!3d22.258078726495796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca591345423d%3A0x4d97ae911e8f6828!2sPrisha%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1708406172814!5m2!1sen!2sin"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
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
