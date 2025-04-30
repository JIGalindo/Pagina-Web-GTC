import React from "react";
import PropTypes from "prop-types";
import "./stylesCourse.css";

export const Course = () => {
  return (
    <>
      <div className="descripcion1">
        <div>
          <h1>Nuestros Cursos</h1>
        </div>
        <div className="descripcionContenedor1">
          <div className="tarjeta1">
            <h4>Trabajo en Alturas (8 horas)</h4>
            <p>
              Normativa, EPP, sistemas de anclaje, técnicas de ascenso/descenso,
              rescate en alturas.
            </p>
          </div>
          <div className="tarjeta1">
            <h4>Trabajo en Espacios Confinados (8 horas)</h4>
            <p>
              Identificación de riesgos, procedimientos de entrada/salida,
              monitoreo, protección respiratoria, rescate.
            </p>
          </div>
          <div className="tarjeta1">
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
