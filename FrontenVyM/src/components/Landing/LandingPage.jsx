import PropTypes from "prop-types";
import React from "react";
import { Head } from "./Head/Head";
import { Course } from "./course/Course";
import { Introduction } from "./Introduction/Introduction";
import { Why } from "./Why/Why";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./Footer/Footer";
import { Certification } from "./Certification/Certification";
import { OurTeam } from "./ourTeam/ourTeam";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Why />
      <Course />
      <Certification />
      <OurTeam />
      <Footer />
    </>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};
