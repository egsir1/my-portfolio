import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="CONTACT"
        text="If you have any request or an offer feel free to message me anytime!"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactPage;
