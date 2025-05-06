import React from "react";
import PropTypes from "prop-types";

export const Head = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center bg-[#ffffff] h-12 px-10
       w-full top-0 left-0 "
      >
        <img src="./Logo.png" alt="Logo" className="w-32" />

        <a
          href="https://certificados.vymhonduras.com/"
          className="text-gray-500 font-normal text-sm 
          hover:text-[#03D2FC] transition duration-300 
          cursor-pointer"
          target="_blank"
        >
          Verificar Tu Certificado
        </a>

        <button
          className="border rounded-full 
        bg-gradient-to-r from-[#03D2FC] to-[#00BFFF] text-white font-semibold text-sm py-2 px-4 
        hover:bg-gradient-to-l transition duration-300
        cursor-pointer"
        >
          Contactanos
        </button>
      </nav>
    </>
  );
};

Head.propTypes = {};
Head.defaultProps = {};
