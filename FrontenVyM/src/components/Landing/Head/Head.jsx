import React from "react";
import PropTypes from "prop-types";
import "./stylesHead.css";

export const Head = () => {
  return (
    <>
      <div className="menu">
        <div className="subMenu">
          <img className="logo" src="/Logo.png" alt="Logo" />
        </div>
        <div className="subMenu">
          <a href="https://certificados.vymhonduras.com/" className="verificar">
            Verificar Tu Certificado
          </a>
        </div>
        <div className="subMenu">
          <button className="botonContac">Contactanos</button>
        </div>
      </div>
    </>
  );
};

Head.propTypes = {};
Head.defaultProps = {};
