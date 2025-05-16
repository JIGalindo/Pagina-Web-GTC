import React from "react";
import PropTypes from "prop-types";

export const Course = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-auto 
      bg-[url(./entrenamiento.png)] ...
      opacity-70 
       text-black mt-2  
      bg-cover "
      >
        <h1 className="font-bold text-4xl pb-10">Nuestros Cursos</h1>
        <div className="flex items-center justify-around">
          <div
            className=" rounded-md 
            flex flex-col items-start justify-start
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[30%]"
          >
            <h4 className="font-bold">Trabajo en Alturas (8 horas)</h4>
            <p className="text-base">
              Normativa, EPP, sistemas de anclaje, técnicas de ascenso/descenso,
              rescate en alturas.
            </p>
          </div>
          <div
            className=" rounded-md 
            flex flex-col items-start justify-start
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[30%]"
          >
            <h4 className="font-bold">
              Trabajo en Espacios Confinados (8 horas)
            </h4>
            <p className="text-base">
              Identificación de riesgos, procedimientos de entrada/salida,
              monitoreo, protección respiratoria, rescate.
            </p>
          </div>
          <div
            className=" rounded-md 
            flex flex-col items-start justify-start
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[30%]"
          >
            <h4 className="font-bold">Actualización (8 horas)</h4>
            <p className="text-base">
              Repaso normativo, nuevas tecnologías, análisis de casos de
              estudio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {};
