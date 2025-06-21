import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

export function Certificate() {
  const [certificado, setCertificado] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/certificado/10019")
      .then((res) => setCertificado(res.data.mensaje))
      .catch((err) => console.error("Error al llamar API:", err));
  }, []);
  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Personas Certificadas</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="bg-white shadow-md rounded">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 ">Nombre</th>
                <th className="text-left p-3">Empresa</th>
                <th className="text-left p-3">Capacitacion</th>
                <th className="text-left p-3">Fecha</th>
                <th className="text-left p-3"></th>
              </tr>
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="">
                  <input
                    type="text"
                    value={certificado.nombre}
                    className="bg-transparent"
                  />
                </td>
                <td className="">
                  <input type="text" value="" className="bg-transparent" />
                </td>
                <td className="">
                  <input type="text" value="" className="bg-transparent" />
                </td>
                <td className="">
                  <input type="text" value="" className="bg-transparent" />
                </td>
                <td className="p-3 flex">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
