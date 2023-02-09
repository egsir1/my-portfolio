import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const toggleHandler = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Sirojiddin</h1>
      </Link>

      <ul className={click ? "navMenu active" : "navMenu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleHandler}>
        {click ? (
          <FaTimes size={20} style={{ marginTop: "0.2rem", color: "#fff" }} />
        ) : (
          <FaBars
            size={20}
            style={{
              marginTop: "0.2rem",
              color: "#fff",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
