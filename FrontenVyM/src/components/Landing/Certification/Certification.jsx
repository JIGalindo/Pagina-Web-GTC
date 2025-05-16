import React from "react";

export const Certification = () => {
  return (
    <>
      <div className="mb-2">
        <div className="mb-2">
          <h1 className="text-center text-4xl font-bold mt-10">
            Certificación
          </h1>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex shadow-md rounded overflow-hidden">
            <div className="bg-blue-200 relative w-20 flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-900">1</div>
              <div className="absolute bottom-[-20px] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[20px] border-t-blue-200"></div>
            </div>
            <div className="bg-white p-4 flex-1">
              <h3 className="text-lg font-bold">
                Certificado Digital e Impreso
              </h3>
              <p className="text-gray-600">
                Recibe tu certificado al finalizar el curso.
              </p>
            </div>
          </div>

          <div className="flex shadow-md rounded overflow-hidden">
            <div className="bg-blue-200 relative w-20 flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-900">2</div>
              <div className="absolute bottom-[-20px] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[20px] border-t-blue-200"></div>
            </div>
            <div className="bg-white p-4 flex-1">
              <h3 className="text-lg font-bold">Validez de 1 Año</h3>
              <p className="text-gray-600">
                Actualización continua recomendada.
              </p>
            </div>
          </div>

          <div className="flex shadow-md rounded overflow-hidden">
            <div className="bg-blue-200 relative w-20 flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-900">3</div>
              <div className="absolute bottom-[-20px] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[20px] border-t-blue-200"></div>
            </div>
            <div className="bg-white p-4 flex-1">
              <h3 className="text-lg font-bold">Estándares Internacionales</h3>
              <p className="text-gray-600">
                Cumplimiento con OSHA 29 CFR 1926 Subparte M.
              </p>
            </div>
          </div>

          <div className="flex shadow-md rounded overflow-hidden">
            <div className="bg-blue-200 relative w-20 flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-900">4</div>
              <div className="absolute bottom-[-20px] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[20px] border-t-blue-200"></div>
            </div>
            <div className="bg-white p-4 flex-1">
              <h3 className="text-lg font-bold">Plataforma Online</h3>
              <p className="text-gray-600">
                Acceso a materiales de apoyo y recursos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
