import React from "react";

import "./home.css";
import HomeTop from "../../components/home_top/HomeTop";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeTop />
      <div className="content-container">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
