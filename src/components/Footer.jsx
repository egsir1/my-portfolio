import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>Jeonju, South Korea</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              82-10-2276-33-11
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto: egsir111@gmail.com">egsir111@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>© 2023 All Rights Reserved.</h4>
          <h4>For Further Info, Feel Free To Hit Me Up</h4>
          <div className="social">
            <Link
              to="https://www.facebook.com/profile.php?id=100085713845580&mibextid=LQQJ4d"
              className="fa"
            >
              <FaFacebook
                size={20}
                style={{ marginRight: "1rem", color: "#fff" }}
              />
            </Link>
            <Link to="https://t.me/egsir11" className="fa">
              <FaTelegram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link
              to="https://instagram.com/egsir_10?igshid=MWI4MTIyMDE="
              className="fa"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
