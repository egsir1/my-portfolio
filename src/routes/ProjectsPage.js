import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROFILE" text="Some of the most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
