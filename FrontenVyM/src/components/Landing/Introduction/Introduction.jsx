import React from "react";
import PropTypes from "prop-types";

export const Introduction = () => {
  return (
    <>
      <div
        className="flex flex-row justify-center align-center items-center 
       bg-gradient-to-b from-sky-[#0ea5e9] to-sky-500
        text-white mb-2 p-10 mt-2 mr-2 ml-2 rounded-lg"
      >
        <div>
          <video
            className="aspect-(--my-aspect-ratio) ... border-2 border-white rounded-lg
          object-cover w-[400px] h-[550px] mt-8"
            controls="true"
            src="./capacitacion.mp4"
            muted="true"
            autoPlay="true"
            loop="true"
          ></video>
        </div>
        <div className="flex flex-col justify-center items-start ml-4">
          <h1 className="text-4xl font-bold mb-4 text-wrap ">
            Capacitación Segura en Alturas y Espacios
            <br />
            Confinados
          </h1>
          <h5 className="text-lg font-normal mb-4 text-wrap">
            Expertos en capacitación de seguridad laboral en alturas y espacios
            confinados. Certificación garantizada.
          </h5>
        </div>
      </div>
    </>
  );
};

Introduction.propTypes = {};
