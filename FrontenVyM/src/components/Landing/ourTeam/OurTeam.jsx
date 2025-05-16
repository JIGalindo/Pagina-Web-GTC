import React from "react";

export const OurTeam = () => {
  return (
    <>
      <div className="flex justify-around items-center flex-wrap">
        <div className="flex flex-col items-center ">
          <img className="size-96 rounded-4xl" src="./Mario.png" alt="foto" />
          <h3 className="text-2xl font-bold">Mario Chinchilla</h3>
          <p className="text-sm font-normal">Experto en trabajos en alturas</p>
        </div>

        <div className="flex flex-col items-center">
          <img className="size-96 rounded-4xl" src="./Darwin.png" alt="foto" />
          <h3 className="text-2xl font-bold">Darwin Gutierrez</h3>
          <p className="text-sm font-normal">Experto en trabajos en alturas</p>
        </div>
      </div>
    </>
  );
};
