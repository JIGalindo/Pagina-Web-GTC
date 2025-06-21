import React from "react";

export const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="flex flex-col p-4 items-center justify-center
         w-auto h-auto 
      bg-[url(./tienda.JPG)] ...
      opacity-70 
       text-black mt-2  
      bg-contain"
      >
        <h1 className="font-bold text-2xl pb-4 lg:text-4xl">Contactanos</h1>
        <div className="flex flex-col font-light text-sm lg:flex-row items-center justify-center ">
          <div
            className="flex flex-col lg:flex-row
            w-auto h-auto gap-4 md:gap-2 items-center justify-center"
          >
            <div
              className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md 
            flex flex-col items-start justify-start
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-auto"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="size-6 md:size-14"
                >
                  <path
                    fill="#ffb636"
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                  />
                </svg>
                <p>+504 3225-8175</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="size-6 md:size-14"
                >
                  <path
                    fill="#ffb636"
                    d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6l-12 6l-12-6V8l12 6l12-6Z"
                  />
                </svg>
                <p>{"Sistemas@vymhonduras.com"}</p>
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-md 
            flex flex-col items-start justify-start
          hover:scale-105 transition-transform duration-300 ease-in-out
          self-stretch w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="size-6 md:size-14"
              >
                <path
                  fill="#ffb636"
                  d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
                />
              </svg>
              <p>
                Colonia Altiplano. 25-26 Call., 13 Ave. , Bulevar del Sur,
                Esquina Opuesta a Los Bomberos , San Pedro Sula , Cortés ,
                Honduras.
              </p>
            </div>
          </div>
        </div>
        {/* component */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-700 shadow rounded p-4 mt-4 w-full lg:w-auto ">
          <form action="" method="post">
            <div className="md:flex justify-around items-center">
              <div className="w-full md:w-1/2 flex flex-col mr-1">
                <label className="text-[20px] lg:text-xl font-semibold leading-none">
                  Nombre
                </label>
                <input
                  type="text"
                  className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-white rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col ">
                <label className="text-[20px] lg:text-xl font-semibold leading-none">
                  Numero Celular
                </label>
                <input
                  type="email"
                  className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-white rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="text-[20px] lg:text-xl font-semibold leading-none">
                  Asunto
                </label>
                <input
                  type="text"
                  className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-white rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-[20px] lg:text-xl font-semibold leading-none">
                  Mensaje
                </label>
                <textarea
                  type="text"
                  className="h-40 text-base leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white border-0 rounded"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className=" text-[20px] lg:text-xl mt-9 font-semibold leading-none py-4 px-10 bg-sky-800 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
