import React from "react";
import PropTypes from "prop-types";

export const Course = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
        <div>
          <h1>Nuestros Cursos</h1>
        </div>
        <div className="">
          <div className="">
            <h4>Trabajo en Alturas (8 horas)</h4>
            <p>
              Normativa, EPP, sistemas de anclaje, técnicas de ascenso/descenso,
              rescate en alturas.
            </p>
          </div>
          <div className="">
            <h4>Trabajo en Espacios Confinados (8 horas)</h4>
            <p>
              Identificación de riesgos, procedimientos de entrada/salida,
              monitoreo, protección respiratoria, rescate.
            </p>
          </div>
          <div className="">
            <h4>Actualización (8 horas)</h4>
            <p>
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
