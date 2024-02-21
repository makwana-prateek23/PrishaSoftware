import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About";
import Services from "./Pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./Pages/ContactUs";
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      {/* <MYSwiper /> */}
    </div>
  );
}

export default App;
