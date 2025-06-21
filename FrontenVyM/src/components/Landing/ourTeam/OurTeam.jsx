import React from "react";

export const OurTeam = () => {
  return (
    <>
      <div
        id="Team"
        className="flex flex-col justify-around items-center flex-wrap"
      >
        <h1 className="p-4 font-bold text-2xl lg:text-4xl ">Nuestro equipo</h1>
        <div className="flex flex-wrap justify-around items-center w-full h-auto ">
          {/*           <div className="flex flex-col items-center ">
            <img className="size-80 rounded-4xl" src="./Mario.png" alt="foto" />
            <h3 className="text-2xl font-bold">Ing. Mario Chinchilla</h3>
            <p className="text-sm font-normal">
              Experto en trabajos en alturas
            </p>
          </div> */}

          <div className="flex flex-col items-center">
            <img
              className="size-60 lg:size-80 rounded-4xl"
              src="./Darwin.png"
              alt="foto"
            />
            <h3 className="text-2xl font-bold lg:text-2xl ">
              Ing. Darwin Gutierrez
            </h3>
            <p className="text-sm font-normal">
              Experto en trabajos en alturas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
