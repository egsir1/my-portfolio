import React from "react";
import "./Hero.css";
import HeroImg from "../assets/hero-4.jpeg";
import { Link } from "react-router-dom";
import resume from "../assets/new-resume.pdf";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={HeroImg} alt="Heroo" />
      </div>
      <div className="content">
        <p>Greetings! I'm Sirojiddin</p>
        <h1>React Developer</h1>
        <div className="actions">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a className="btn-light" href={resume}>
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
