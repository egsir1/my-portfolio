import React from "react";
import "./WorkCard.css";
// import firdavs from "../assets/firdavs-intro.png";
// import { NavLink } from "react-router-dom";
import WorkCardData from "../WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  console.log(WorkCardData);
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((item) => (
          <WorkCard
            key={item.id}
            imgsrc={item.imgsrc}
            title={item.title}
            text={item.text}
            view={item.view}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
