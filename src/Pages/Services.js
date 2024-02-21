import React from "react";
import Layout from "../Components/Layout";

function Services() {
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
          <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-screen-xl">
            <div>
              <div>
                {" "}
                <h6>Our Expertise</h6>
                <h2 className="text-6xl">
                  We have a wide range
                  <br />
                  expertise in different
                  <span style={{ color: "var(--text-color)" }}>services</span>
                </h2>
              </div>
              <div></div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default Services;
