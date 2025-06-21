import PropTypes from "prop-types";
import React from "react";
import { Course } from "./course/Course";
import { Introduction } from "./Introduction/Introduction";
import { Why } from "./Why/Why";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./Footer/Footer";
import { Certification } from "./Certification/Certification";
import { OurTeam } from "./ourTeam/ourTeam";
import { Contact } from "./Contact/Contact";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Why />
      <Course />
      <Certification />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};
