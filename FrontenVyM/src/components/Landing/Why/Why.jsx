import React from "react";
import PropTypes from "prop-types";

export const Why = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center 
       h-auto w-full
       text-black mb-2 p-10 mt-2  rounded-lg"
      >
        <h1 className="font-bold text-4xl pb-10">¿Por Qué Elegirnos?</h1>
        <div className="flex items-self justify-around">
          <div
            className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md 
            flex flex-col items-center justify-around
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[20%]"
          >
            <h4 className="font-bold m-2">Experiencia Comprobada</h4>
            <p className="text-base m-2">
              Instructores certificados con más de 10 años de experiencia
              práctica en el campo.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="size-20"
            >
              <path
                fill="#ffb636"
                d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"
              />
              <path
                fill="#ffd469"
                d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"
              />
            </svg>
          </div>
          <div
            className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md
            flex flex-col items-center justify-around
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[20%]
          "
          >
            <h4 className="font-bold m-2">Cumplimiento Normativo</h4>
            <p className="text-base m-2">
              Cursos diseñados según normativas internacionales (OSHA, ANSI,
              etc.) para garantizar la seguridad.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1200"
              height="1200"
              viewBox="0 0 1200 1200"
              className="size-20 "
            >
              <path
                fill="#ffb636"
                d="M0 0v1200h1200V424.289l-196.875 196.875v381.961h-806.25v-806.25h381.961L775.711 0zm1030.008 15.161l-434.18 434.25L440.7 294.283L281.618 453.438L595.821 767.57l159.082-159.082l434.18-434.25l-159.082-159.081z"
              />
            </svg>
          </div>
          <div
            className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md
            flex flex-col items-center justify-around
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[20%]"
          >
            <h4 className="font-bold m-2">Entrenamiento Realista</h4>
            <p className="text-base m-2">
              Simulacros realistas en entornos controlados, con un índice de
              satisfacción del 95%.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="size-24 "
            >
              <g fill="#ffb636">
                <path d="M3 3h18v4.385h-2V5H5v9h4.333v2H3z" />
                <path d="M12.684 10.287C13.558 11.212 14.303 12 16 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V22h-3v-8c-2.617 0-3.956-1.45-4.84-2.405a14 14 0 0 0-.367-.388l1.414-1.414q.249.25.477.494M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
              </g>
            </svg>
          </div>
          <div
            className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md
            flex flex-col items-center justify-around 
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-[20%]"
          >
            <h4 className="font-bold m-2">Reconocimiento Industrial</h4>
            <p className="text-base m-2">
              Certificación válida y reconocida por la industria, avalando la
              calidad de nuestra formación.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="size-22 "
            >
              <path
                fill="#ffb636"
                d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14t3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21zm8-8q-1.65 0-2.825-1.175T5.05 9H4.3V8h.75q0-1.125.55-2.025T7.05 4.55V6h1V4.15q.225-.075.475-.112T9.05 4t.525.038t.475.112V6h1V4.55q.9.525 1.45 1.425T13.05 8h.75v1h-.75q0 1.65-1.175 2.825T9.05 13m0-2q.825 0 1.413-.587T11.05 9h-4q0 .825.588 1.413T9.05 11m7.5 4l-.15-.75q-.15-.05-.287-.112t-.263-.188l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.262.188t-.288.112l-.15.75zm.5-1.75q.3 0 .525-.225t.225-.525t-.225-.525t-.525-.225t-.525.225t-.225.525t.225.525t.525.225m1.8-3.25l-.2-1.05q-.225-.075-.412-.187T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05zm.7-2.25q.525 0 .888-.363T20.8 6.5t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

Why.propTypes = {};
