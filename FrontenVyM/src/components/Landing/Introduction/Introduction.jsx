import React from "react";
import { Footer } from "../Footer/Footer";


export const Introduction = () => {
  return (
    <>
      <div
        className="relative w-full h-auto  text-white "
        transition-style="in:custom:circle-swoop"
      >
        {/* Video en el fondo */}
        <video
          className="w-full h-[400px] object-cover "
          style={{ aspectRatio: "16 / 9" }}
          src="./gtc.mp4"
          muted
          autoPlay
          loop
        />

        {/* Capa superpuesta con texto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center px-4 rounded-lg">
          <h1
            className="text-[20px] lg:text-4xl font-bold text-center
            text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-yellow-400 to-sky-700
          drop-shadow-lg"
          >
            Capacitación Segura en Alturas y Espacios Confinados
          </h1>
          <h5
            className="text-[15px] lg:text-2xl font-normal text-center 
          text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-yellow-400 to-sky-700
          drop-shadow text"
          >
            Expertos en seguridad laboral con certificación garantizada.
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

