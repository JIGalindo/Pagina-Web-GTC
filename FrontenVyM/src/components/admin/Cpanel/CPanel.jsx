import React from "react";

export const CPanel = () => {
  return (
    <>
      <div>
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Panel de Administración</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Bienvenido al Panel de Administración
              </h2>
              <p className="text-gray-700 mb-6">
                Aquí puedes gestionar los usuarios, certificados y otras
                configuraciones del sistema.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Gestionar Usuarios
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Gestionar Certificados
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Configuraciones del Sistema
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
