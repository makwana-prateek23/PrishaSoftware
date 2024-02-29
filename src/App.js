import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About";
import Services from "./Pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import Privacy from "./Pages/Privacy";
function App() {
  useEffect(() => {
    AOS.init({
      // Global AOS settings
      duration: 800,
      easing: "ease-out",
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Prisha Software provides innovative software solutions for businesses."
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
      {/* <MYSwiper /> */}
    </div>
  );
}

export default App;
