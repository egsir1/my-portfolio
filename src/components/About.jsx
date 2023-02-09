import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import hero5 from "../assets/hero.jpg";
import resume from "../assets/new-resume.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>My name is Sirojiddin Egamberdiev</h1>
        <p>
          I am a self-taught react front-end developer. Originally from
          Uzbekistan, currently live in South Korea. I can build responsive and
          dynamic websites and web applications. I am about to start learning
          back-end side of web so that I can build more secure and sustainable
          full-stack applications. My motto is 'Never stop learning!'{" "}
        </p>
        <div className="personal-info">
          <div className="details">
            <h3>Full Name </h3>
            <p>:</p>
            <h4>Sirojiddin Egamberdiev</h4>
          </div>
          <div className="details">
            <h3>Age</h3>
            <p>:</p>
            <h4>27</h4>
          </div>
          <div className="details">
            <h3>Address</h3>
            <p>:</p>
            <h4>Jeonju, South Korea</h4>
          </div>
          <div className="details">
            <h3>Phone Number</h3>
            <p>:</p>
            <h4>010****3311</h4>
          </div>
          <div className="details">
            <h3>Email</h3>
            <p>:</p>
            <h4>egsir111@gmail.com</h4>
          </div>
        </div>
        <div className="acts">
          <a href={resume}>
            <button className="btn btn-f btn-font">Resume</button>
          </a>
          <Link to="/project">
            <button className="btn btn-f ">Portfolio</button>
          </Link>
        </div>
      </div>
      <div className="about-img">
        <img src={hero5} alt="Hero" />
      </div>
    </div>
  );
};

export default About;
