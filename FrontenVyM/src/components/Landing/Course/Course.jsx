import React from "react";
import PropTypes from "prop-types";
import { Footer } from "../Footer/Footer";
import { Why } from "../Why/Why";

export const Course = () => {
  return (
    <>
      <div
        id="Course"
        className="flex flex-col items-center justify-center w-full h-auto 
      bg-[url(./entrenamiento.png)] ...
      opacity-70 
       text-black mt-2  
      bg-cover "
      >
        <h1 className="font-bold text-[25px] lg:text-4xl p-4">
          Nuestros Cursos
        </h1>
        <div className="flex flex-col justify-around lg:flex-row p-4 gap-4 w-full h-auto">
          <div
            className=" rounded-md 
            flex flex-col items-center justify-center
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-auto lg:w-[30%]"
          >
            <h4 className="font-bold text-[18px] lg:text-xl">
              Trabajo en Alturas (8 horas)
            </h4>
            <p className="text-[15px] lg:text-base">
              Normativa, EPP, sistemas de anclaje, técnicas de ascenso/descenso,
              rescate en alturas.
            </p>
          </div>
          <div
            className=" rounded-md 
            flex flex-col items-center justify-center
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-auto lg:w-[30%]"
          >
            <h4 className="font-bold text-[18px] lg:text-xl">
              Trabajo en Espacios Confinados (8 horas)
            </h4>
            <p className="text-[15px] lg:text-base">
              Identificación de riesgos, procedimientos de entrada/salida,
              monitoreo, protección respiratoria, rescate.
            </p>
          </div>
          <div
            className=" rounded-md 
            flex flex-col items-center justify-center
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-auto lg:w-[30%]"
          >
            <h4 className="font-bold text-[18px] lg:text-xl">
              Actualización (8 horas)
            </h4>
            <p className="text-[15px] lg:text-base">
              Repaso normativo, nuevas tecnologías, análisis de casos de
              estudio.
            </p>
          </div>
        </div>
      </div>
      <Why />
      <Footer />
    </>
  );
};

Course.propTypes = {};
