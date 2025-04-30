import React from "react";
import PropTypes from "prop-types";
import "./stylesWhy.css";

export const Why = () => {
  return (
    <>
      <div className="descripcion">
        <div>
          <h1>¿Por Qué Elegirnos?</h1>
        </div>
        <div className="descripcionContenedor">
          <div className="tarjeta">
            <h4>Experiencia Comprobada</h4>
            <p>
              Instructores certificados con más de 10 años de experiencia
              práctica en el campo.
            </p>
          </div>
          <div className="tarjeta">
            <h4>
              Cumplimiento <br />
              Normativo
            </h4>
            <p>
              Cursos diseñados según normativas internacionales (OSHA, ANSI,
              etc.) para garantizar la seguridad.
            </p>
          </div>
          <div className="tarjeta">
            <h4>Entrenamiento Realista</h4>
            <p>
              Simulacros realistas en entornos controlados, con un índice de
              satisfacción del 95%.
            </p>
          </div>
          <div className="tarjeta">
            <h4>Reconocimiento Industrial</h4>
            <p>
              Certificación válida y reconocida por la industria, avalando la
              calidad de nuestra formación.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Why.propTypes = {};
