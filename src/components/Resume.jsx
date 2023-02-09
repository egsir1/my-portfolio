// import React from "react";
// import { Document, Page } from "react-pdf";
import resume from "../assets/my-resume.pdf";

const Resume = () => {
  return (
    <div className="main-container">
      <a href={resume}>See my CV</a>
    </div>
  );
};

export default Resume;
