import PropTypes from "prop-types";
import React from "react";
import { Head } from "./Head/Head";
import { Course } from "./course/Course";
import { Introduction } from "./Introduction/Introduction";
import { Why } from "./Why/Why";

export const LandingPage = () => {
  return (
    <>
      <Head />
      <Introduction />
      <Why />
      <Course />
    </>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};
