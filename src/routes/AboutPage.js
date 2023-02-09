import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Who Am I ?" />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
